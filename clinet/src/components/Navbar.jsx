import React from "react";
import {Link } from "react-router-dom";

const  Navbar= () => {
    return (
     <>
        <div className="txst-fluid bg-amber-800"> 
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Our Services</Link>
        <Link to={"/stories"}>Client Stories</Link>
        <Link to ="/events">Events</Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/contact"}>Contact</Link>
        <button className="border p-3 rounded-md">Login to Plan your event</button>
        </div>
      </>
    );
};
export default Navbar;