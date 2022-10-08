import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios';
import cookie from "cookie"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});



const pathname = window.location.pathname


const TheEvent = (props) => {
    const [event, setEvent] = useState({});
    const [loggedinn, setlogged] = useState(false)

    
    const eventId = useParams().id


    const cookies = cookie.parse(document.cookie);
    const userIDlogged = Number(cookies.userId)
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://a-event.herokuapp.com/events/${eventId}`, {
            headers: {
                Authorization: `token ${cookies.jwt}`
            }
        })
            .then(res => {
                setEvent(res.data)
                console.log(res)
                if(userIDlogged == res.data.userId){                   
                     setlogged(true) 
                     console.log("carai") 
                }
            },)
    }, [eventId])

    const handleDelete = (e) => {
        axios.delete(`https://a-event.herokuapp.com/events/${eventId}`, {
            headers: {
                Authorization: `token ${cookies.jwt}`
            }
        })
        .then(() => setEvent({ status: 'Delete successful' }));
        navigate("/")
    }

    console.log(cookies)


    return (
        <ThemeProvider theme={darkTheme}>

            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 500,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#121212' : "#fff",
                }}
            >
                <Grid container spacing={2}>

                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h4" component="div">
                                    {event.eventName}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {event.eventdate}
                                </Typography>
                                {/* <Typography variant="body1" mt={2} gutterBottom>
                                    {event.userId}
                                </Typography> */}
                                <Typography variant="body2" mt={2} gutterBottom>
                                <Chip label="MUSIC :" size="medium" />  {event.eventmusic}                              </Typography>
                                <Typography variant="body1" mt={2} gutterBottom>
                                <Chip label="ADDRESS :" size="medium" /> {event.address}                                </Typography>

                                <Typography variant="body1" mt={2} gutterBottom>
                                <Chip label="DESCRIPTION :" size="medium" />  {event.description}
                                </Typography>
                            </Grid>
                            <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>

                            </Grid>
                        </Grid>
                        <Grid item sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                            <Typography variant="subtitle1" component="div">
                                {event.price}
                            </Typography>
                            {loggedinn && (<div>
                                {/* <Tooltip title="Edit">
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip> */}
                                <Tooltip title="Delete" >
                                    <IconButton>
                                        <DeleteIcon sx={{ color: "red" }} onClick={handleDelete} />
                                    </IconButton>
                                </Tooltip>


                            </div>)
}
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Paper> </ThemeProvider>
    )

}






export default TheEvent