import React, { useState } from "react";
import entrance from "../assets/entrance.jpg";
import { useNavigate } from "react-router-dom";

const Register =  () => {
const navigate = useNavigate();

const [registerData, setRegisterData] = useStatus({
    fuLLName: "",
    emaiL: "",
    password: "",
    phone: "",
})

const handeLChange = (e) => {
    const { name,value } = e.target;

    setRegisterData((previousData) => ({ ...previousData, [name]: value}))
}

const handelSubmit = (e) => {
    e.preventDefault();

    console.log(registerData);

    setRegisterData({
    fuLLName: "",
    emaiL: "",
    password: "",
    phone: "",
    })
}

return (
    <>
    <div className="mt-[10%] relative h-screen flex justify-center items-center">

        <img src={entrance} alt="" className="absolute -z-1 opacity-80 w-full"/>

        <div className="min-h-screen w-200 flex items-center justify-center font-serif mt-70">

            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2x1 w-full max-w-md border border-yellow-500">

            <h2 className="text-3x1 text-center font-bold text-pink-500 mb-6 drop-shadow-md">Register</h2>
            <form className="space-y-5" onSubmit={handelSubmit}>
                <div>
                    <label className="text-pink-500 block mb-1">Name</label>
                    <input type="text" name="fullName" className="w-full px-4 py-2 rounded-lg bg-white/20 text-black placeholder:text-gray-500 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Enter your name" value={registerData.fullName} onChange={handelChange} required />
                </div>
                <div><label className="text-pink-500 block mb-1">Email</label>
                <input type="email" name="email" className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder:text-gray-500 border border-yellow-400 focus:outlone-none focus:ring-2 focus:ring-pink-300" placeholder="Enter your email" value={registerData.email} onChange={handelChange} required />
                </div>
                <div>
                    <label className="text-pink-500 block mb-1">Phone Number</label>
                    <input type="tel" name="phone" className="w-full px-4 py-2 rounded-lg bg-white/20 text-black placeholder:text-gray-500 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Enter  your Phone Number" value={registerData.phone} onChange={handelChange} required/>
                </div>

                 <div>
                    <label className="text-pink-500 block mb-1">Password</label>
                    <input type="password"  name="password"className="w-full px-4 py-2 rounded-lg bg-white/20 text-black placeholder:text-gray-500 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Enter your Password" value={registerData.password} onChange={handelChange} required/>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-[#0f172a] font-semibold py-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200">Register</button>
            </form>
            <p className="text-center  text-sm text-black mt-6">Already have an account?{" "}
            <span className="text-pink-400 underline cursor-pointer" onClick={() => navigate("/login")}>Login</span>
            </p>
            </div>
        </div>
    </div>
    </>
);
};
export default Register;