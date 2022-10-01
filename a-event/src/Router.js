import React from 'react'
import { Routes, Route } from 'react-router'
import { Navigate } from "react-router-dom"
import cookie from "cookie"

import Login from './components/Login'
import Events from './components/Events'
import Register from './components/Register'
import AddEvent from './components/AddEvent'
import TheEvent from './components/TheEvent'





const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };



const ProtectedRoute = (props) => {

    const { component: Component, ...rest } = props;
  
    return (
      checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/login" /> )
    );
  };
  

const Router = () => {
    return (
        <Routes>
           <Route path='/' element={<ProtectedRoute component={Events}/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/addevent" element={<ProtectedRoute component={AddEvent}/>}/>
            <Route path="/events/:id" element={<ProtectedRoute component={TheEvent}/>}/>
            {/* <Route path='car/:id' element={<ProtectedRoute component={Car}/>} /> */}
        </Routes>
    )
}
export default Router