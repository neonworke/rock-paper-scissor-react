import React, { useState } from 'react'
import "../App.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {

    const loginNavigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, confirmPassword } = user
        if(name && email && password && (password === confirmPassword)){
            axios.post("http://localhost:3000/userList/register", user)
                .then(res => {
                    console.log(res)
                    loginNavigate("/login")
                })
        } else {
            console.log("Invalid Input")
        }
    }

    function renderRegistration() {
        return (
            <div>
                {console.log("user", user)}
                <form className="h-auto w-80 shadow-md mt-28 pb-4 bg-gray-400 rounded-md" autoComplete="off">
                    <div className="bg-gray-800 w-full h-16 flex justify-center items-center">
                        <div className="">
                            <span className="text-green-400 font-bold text-xl">Register</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="input-container text-left w-full flex flex-col justify-center items-center">
                            <input className="input-col" type="text" name="name" value={user.name} placeholder="Enter your name" onChange={handleChange} required></input>
                            <input className="input-col" type="email" name="email" value={user.email} placeholder="Enter your email address" onChange={handleChange} required></input>
                            <input className="input-col" type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange} required></input>
                            <input className="input-col" type="password" name="confirmPassword" value={user.confirmPassword} placeholder="Confirm Password" onChange={handleChange} required></input>
                        </div>
                        <div className="flex flex-col justify-center items-center pt-4">
                            <button type="submit" className="w-3/4 h-auto py-2 bg-red-700 shadow-md rounded-md text-white font-bold" onClick={register}>Register</button>
                            <div className="font-semibold py-2">OR</div>
                            <button type="submit" className="w-3/4 h-auto py-2 bg-green-400 shadow-md rounded-md text-white font-bold" onClick={() => loginNavigate("/login")}>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <div>
            <div className="flex justify-center items-center">
                    {renderRegistration()}
                </div>
        </div>
    )
}

export default Registration
