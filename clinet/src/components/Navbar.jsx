import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


const  Navbar = () => {
  const navigate = useNavigate();
    return (
     <>
        <div className="bg-transparent flex justify-center gap-10 text-xl items-center sticky top-0 z-99"> 
        <Link to={"/about"}>About</Link>
        <Link to={"/our services"}>Our Services</Link>
        <Link to={"/clinet stories"}>Client Stories</Link>
        <Link to={"/"}>
        <img src={logo} alt="" className="h-[5em]" />
        </Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/contact"}>Contact Us</Link>
        <button className="border p-3 rounded-md" onClick={() => navigate("login")}>{" "}Login to Plan your event{" "}</button>
        </div>
      </>
    );
};
export default Navbar;