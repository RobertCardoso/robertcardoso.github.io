import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Avatar, FormControlLabel, Checkbox, Link, Grid, Box } from "@mui/material";
import cookie from "cookie"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';


import '../App.css';
import axios from "axios";
function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

const Login = () => {
    const navigate = useNavigate();

    const theme = createTheme();

    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(undefined);

    const [state, setState] = useState({
        email: "",
        password: "",
    });


    const handleClick = (Transition) => () => {
        setTransition(() => Transition);
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


    
    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const login = (e) => {
        e.preventDefault();
        
        axios.post('https://a-event.herokuapp.com/login', { email: state.email, password: state.password }).then(response => {
            console.log(response);
            
            document.cookie = `jwt=${response.data.signedToken};max-age=60*1000`;
            document.cookie = cookie.serialize("loggedIn", true, { maxAge: 60*100000 });
            document.cookie = `userId=${response.data.userId};max-age=60*1000`
            console.log('headers', response.headers)
            console.log("cookie" , document.cookie)
            navigate("/");
            document.location.reload();
    
            handleClick(TransitionLeft)
            
        })
            .catch(function (error) {
                console.log(error)
            })

    };
   
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" className='login'>


                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box component="form" className="login-form" onSubmit={login} noValidate sx={{ mt: 1 }}>
                            <TextField
                                required
                                margin="normal"
                                onChange={handleTextChange}
                                value={state.email}
                                fullWidth
                                name="email"
                                label="Email"
                                type="email"
                            />
                            <TextField
                                required
                                margin="normal"
                                fullWidth
                                onChange={handleTextChange}
                                value={state.password}
                                name="password"
                                label="Password"
                                type="password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                                
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className="login-button"
                                sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}
                            >
                                Login
                            </Button>
                            <Grid container sx={{ display: "flex", justifyContent: "center" }}>

                                <Grid item >
                                    <Link href="/register" variant="body2" sx={{ color: 'black' }}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
            <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="I love snacks"
        autoHideDuration={3000}
        key={transition ? transition.name : ''}
      />
        </div>
    );
};

export default Login;