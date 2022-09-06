import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <header className="bg-pink-100">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-blue-400"
                    className="inflex-flex items-center py-6 px-3 mr-4 hover:text-white cursive tracking-widest">Home</NavLink>
                    <NavLink to="/post" activeClassName="text-blue-400" className="inline-flex items-center py-3 px-3 my-6 rounded hover:text-white cursive tracking-widest">Blog</NavLink>
                    <NavLink to="/project" activeClassName="text-blue-400" className="inline-flex items-center py-3 px-3 my-6 rounded hover:text-white cursive tracking-widest">Projects</NavLink>
                    <NavLink to="/about" activeClassName="text-blue-400"
                    className="inline-flex items-center py-3 px-3 my-6 rounded hover:text-white cursive tracking-widest">About</NavLink>
                </nav>
            </div>
        </header>
    )
}