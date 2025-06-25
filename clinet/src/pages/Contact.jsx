import React from "react";
import contactimage from "../assets/contactimage.jpg";
import { useNavigate } from "react-router-dom";
const Contact = () => {
    return (
<>
     <div className="mt-[10%] relative h-screen  justify-center items-center">
        <img src={contactimage} alt="" className="absolute -z-1 opacity-100 h-full w-full flex justify-center items-center"  />
        
     <div>
         <label className="text-yellow-500 block md-1">Your Name</label>
         <input type="name" className="w-50 px-4 py-2 rounded-lg  text-black placeholder:text-green-500 border border-yellow-400 focus:outline-none focus:ring-2" placeholder="Enter Your Name" />
    </div>
    <br/>
    

    <div>
    <label className="text-yellow-500 block md-1">Your Email</label>
    <input type="email" className="w-50 px-4 py-2 rounded-lg  text-black placeholder:text-green-500 border border-yellow-400 focus:outline-none focus:ring-2 " placeholder="Enter Your Email" />
    </div>
    <br />
    

    <div>
    <label className="text-yellow-500 block md-1">Your Mobile  Number</label>
    <input type=" phone number" className="w-50 px-4 py-2 rounded-lg text-black placeholder:text-green-500 border border-yellow-400 focus:outline-none focus:ring-2"  placeholder="Enter Your Phone  Number" />
    </div>
    <br />
    

    <div>
            <label className="text-yellow-500 block md-1"> Enter Your Address</label>
            <input type="Enter Your Address" className="w-50 px-4 py-2 rounded-lg text-black placeholder:text-green-500 border border-yellow-400 focus:outline-none focus:ring-2"  placeholder="Enter Your Address" />
    </div>
<br />
     <div>
            <label className="text-yellow-500 block md-1">Message</label>
            <input type="Enter Your Message=" className="w-50 px-4 py-2 rounded-lg text-black placeholder:text-green-500 border border-yellow-400 focus:outline-none focus:ring-2"  placeholder="Enter Your Message" />
    </div>
    <br />
    <div>
        <label button="submit" className="w-40 px-2 py-3 placeholder:text-green-500 border"></label>
    <button type="button">Submit</button>
    
    </div>
    </div>
    
</>
    );
}
 export default  Contact;