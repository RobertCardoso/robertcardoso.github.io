import React, { useState, useEffect} from 'react';

import { styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Link } from 'react-router-dom'

import FavoriteIcon from '@mui/icons-material/Favorite';
import cookie from "cookie"

import '../App.css';




function EventCard(props) {

    const [loggedinn, setlogged] = useState(false)

    const cookies = cookie.parse(document.cookie);
    const userIDlogged = Number(cookies.userId)


    const Img = styled("img")({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });


    useEffect(() => {
        if(userIDlogged == props.userId){                   
            setlogged(true) 
            console.log("carai") 
            return
       }
    },[])



    return (
        <div>
            
            <Paper
            className='EventPaper'

                sx={{
                    mx: '2px', transform: 'scale(1)', width: 380, height: '130px',
                    p: 2,
                    margin: '20px',
                    flexGrow: 1,
                    
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#121212',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img src={require('./aevent.jpg')} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div" color={'white'}>
                                    {props.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom color={'white'}>
                                    {props.address}
                                </Typography>
                                <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" >
                                    {props.eventdate}
                                </Typography>
                            </Grid>
                            <Grid item sx={{color:"red"}}>
                                <Link to={`/events/${props.id}`}>Check Event</Link>
                            </Grid>
                        </Grid>
                        <Grid item display={"flex"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"} >
                            <Typography variant="subtitle1" component="div" color={'white'} >
                                {props.price}                             
                            </Typography> 
                            {loggedinn && (<FavoriteIcon sx={{color:"red"}}/>)}
                                           
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Paper>





        </div>




    )
}

export default EventCard  