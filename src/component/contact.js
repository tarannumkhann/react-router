import React from 'react'
import NavBar from './Navbar';
import { Link, Outlet } from 'react-router-dom';
function ContactUS(){
    return(
        <div >
            <NavBar/>
         <h1>My Contact Us page</h1>
         <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus?</h2>
        <li><Link to="channel">Channel</Link></li>
        <li><Link to="company">Company</Link></li>
        <li><Link to="other">Other</Link></li>
         <Outlet/>
        </div>
    )
}
export default ContactUS;