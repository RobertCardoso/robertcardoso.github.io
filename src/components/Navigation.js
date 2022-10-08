import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import cookie from "cookie"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';





const cookies = cookie.parse(document.cookie); // transforma o cookie em json
const drawerWidth = 240;

const pathname = window.location.pathname // path que vem no url depois da barra /



const Navigation = (props) => {
    const navigate = useNavigate()

    const [loggedinn, setlogged] = useState(false)
    const { window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    
    const logged = Object.entries(cookies)


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
        
    };
    // console.log("URL", currentURL, "path", pathname)

    useEffect(() => {
        // document.location.reload();
       
        if ((pathname === "/login")||(pathname === "/register") ) {
            setlogged(false)
           
        } else {
            setlogged(true)
        }
    },[])

 

    const showButton = (
        
        <Button
            onClick={() => {
                navigate('/addevent');
            }}
            sx={{ backgroundColor: 'red', color: 'white',marginRight:"20px" }}
            variant="contained"
            color="warning"
        >
            Add Event
        </Button>

    )

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                A - EVENT
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding sx={{ color: "red"}}>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        {loggedinn && (<ListItemText  primary={<Link to="/addevent">ADD EVENT</Link>} />)}
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={<Link to="/">EVENTS</Link>} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        {loggedinn && (<ListItemText primary={'LOGOUT' } onClick={() => {
                            document.cookie = cookie.serialize("loggedIn", "false", {
                                maxAge: 0
                            });
                            document.cookie = cookie.serialize("userId", null, {
                                maxAge: 0
                              });
                              document.cookie = cookie.serialize("jwt", null, {
                                maxAge: 0
                              });
                            setlogged(false)
                            navigate("/login");
                            
                        }}/>)}
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        A - EVENT
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {loggedinn && (showButton)}
                        <Button sx={{ color: '#fff',marginRight:"20px" }} onClick={() => {
                            navigate('/');
                        }}>{'Events'}</Button>
                        {loggedinn && (<Button sx={{ color: '#fff' }} onClick={() => {
                            document.cookie = cookie.serialize("loggedIn", "false", {
                                maxAge: 0
                            });
                            document.cookie = cookie.serialize("userId", null, {
                                maxAge: 0
                              });
                              document.cookie = cookie.serialize("jwt", null, {
                                maxAge: 0
                              });
                            setlogged(false)
                            navigate("/login");
                            
                        }} >{'logout'}</Button>)}

                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    )
}

export default Navigation