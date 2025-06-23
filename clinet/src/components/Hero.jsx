import React from "react";
import background from "../assets/background.jpg";
const Hero = () => {
    return (
        <>
        <div className="mt-[-10%] relative h-200 flex justify-center items-center">
            <img src={background} alt="" className="absolute -z-1 opacity-80" />
            <div className="grid gap-20 justify-items-center">
                <h1 className="text-fuchsia-500 text-shadow-cyan-100 text-shadow-lg text-9xl font-extrabold font-[family-name:var(--customFont)] w-2/3 twxt-center">
                Turn Your Dream Into Reality
                </h1>
                <div className="flex gap-10 ">
                    <button className="rounded px-5 py-3 text-white bg-fuchsia-500 hover:bg-fuchsia-600">Book Now</button>
                    <button className="rounded px-5 py-3 text-fuchsia-500 border-3 border-fuchsia-500 hover:bg-fuchsia-600 hover:text-white">Read More</button>
                </div>
            </div>
        </div>
        </>
    );
};
export default Hero;