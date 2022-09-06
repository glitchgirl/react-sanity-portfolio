import React from "react";
import image from "../background.jpg"
export default function Home(){
    return(
        <main>
            <img src={image} alt="background" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64">
                <h1 className="text-6xl font-bold home-name cursive">Hewwo</h1>
            </section>
        </main>
    )
}