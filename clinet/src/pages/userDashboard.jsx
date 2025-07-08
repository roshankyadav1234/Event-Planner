import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../config/api";

const UserDashboard = () =>{
    
    const [userdata, setUserData] = useState({
        fullName: "John Doe",
        email: "john.doe@eample.com",
        phone: "123-456-7890",
    });

    const fetchUserData = async () => {
        try{
            const res = await api.get("/user/profile");
            setUserData(res.data.data);
            toast.success(res.data.message);
        } catch (error){
            toast.error(
                `Error : ${error.response?.status || error.message} | ${
                error.response?.data.message || ""
            }`
        );
        }
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <>
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold">User Dashboard</h1>
            <p className="text-gray-600">Welcome to your dashboard!</p>
        </div>

        <div className="bg-white mx-auto my-5 w-[25%] border p-6 rounded-lg shadow-md grid justify-around gap-5">
            <h3>
                <b>Name :</b> {userdata.fullName}
            </h3>
            <h3>
                <b>Email :</b> {userdata.email}
            </h3>
            <h3>
                <b>Phone :</b> {userdata.phone}
            </h3>
        </div>
        </>
    );
};

export default UserDashboard;