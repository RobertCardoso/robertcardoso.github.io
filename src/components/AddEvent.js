import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import cookie from "cookie"
import { Navigate} from "react-router-dom";




const cookies = cookie.parse(document.cookie);

const theme = createTheme();



const Img = styled("img")({
  margin: 'auto',
  marginTop: '10px',
  marginBottom: '10px',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

class AddEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventName: "",
      address: "",
      price: "",
      eventmusic: "",
      eventdate: "",
      description: ""
    }
  }


  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    
    axios.post('https://a-event.herokuapp.com/events', {
      eventName: this.state.eventName,
      address: this.state.address,
      price: this.state.price,
      eventmusic: this.state.eventmusic,
      eventdate: this.state.eventdate,
      description: this.state.description,
    }
    , {
      headers: {
        Authorization: `token ${cookies.jwt}`
      }}
      )
      .then(function(response) {
        console.log(response)
        Navigate('/login')
      }).catch(function (error) {
        console.log(error)
      })
    this.setState({
      eventName: "",
      price: "",
      eventmusic: "",
      description: "",
      eventdate: "",
      address: ""
    })
    

  }

  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme} >
          <Container component="main" maxWidth="xs" >
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img src={require('./aevent.jpg')} />
              </ButtonBase>
              <Typography component="h1" variant="h5" sx={{marginTop:"20px"}}>
                CREATE A EVENT
              </Typography>

              <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="eventName"
                      required
                      value={this.state.eventName}
                      onChange={(e) => { this.handleChange(e) }}
                      fullWidth
                      id="eventName"
                      label="Event Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      value={this.state.eventdate}
                      onChange={(e) => { this.handleChange(e) }}
                      id="eventdate"
                      label="Date"
                      name="eventdate"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="eventmusic"
                      required
                      value={this.state.eventmusic}
                      onChange={(e) => { this.handleChange(e) }}
                      fullWidth
                      id="eventmusic"
                      label="Type of Music "
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={this.state.price}
                      onChange={(e) => { this.handleChange(e) }}
                      required
                      fullWidth
                      id="price"
                      label="Price"
                      name="price"
                    />
                  </Grid>
                  <Grid item xs={12} x={12}>
                    <TextField
                      value={this.state.address}
                      onChange={(e) => { this.handleChange(e) }}
                      required
                      fullWidth
                      id="address"
                      label="Address"
                      name="address"
                      autoComplete="address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={this.state.description}
                      onChange={(e) => { this.handleChange(e) }}
                      required
                      fullWidth
                      name="description"
                      label="Description"
                      type="description"
                      id="description"
                      autoComplete="description"
                      rows={4}

                    />
                  </Grid>
                  <Grid item xs={12}>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "red" }}
                >
                  CREATE
                </Button>
                <Grid container justifyContent="flex-end">
                </Grid>
              </Box>
            </Box>
         </Container>
        </ThemeProvider></div>
    );
  }

}


export default AddEvent



