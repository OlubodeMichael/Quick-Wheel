import React, { useState } from "react";


export function SignIn({onClick}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // Here you can perform your sign-in logic
        console.log("Username:", userName);
        console.log("Password:", password);
        // Reset the form after submission
        setUserName("");
        setPassword("");
    }

    function handleUserNameChange(e) {
        setUserName(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col w-80 p-6  rounded-lg ">
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={userName} 
                    onChange={handleUserNameChange} 
                    className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={handlePasswordChange} 
                    className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Sign In
                </button>
                <p className="py-4 text-center"> don't have an account <button className="px-2 text-blue-900" onClick={onClick}>Sign Up</button> </p> 
                
            </form>
            
        </div>
    );
}
