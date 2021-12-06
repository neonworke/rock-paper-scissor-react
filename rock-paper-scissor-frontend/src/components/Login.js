import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../App.css";

function Login({setLoginUser}) {

    const registerNavigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/userList/login", user)
            .then(res => {
                // alert(res.data.message)
                setLoginUser(res.data.user)
                registerNavigate("/")
            })
    }

    return (
        <div>
            <div className="flex justify-center items-center">
            {console.log("user", user)}
            <form className="h-auto w-80 shadow-md bg-gray-400 mt-36 rounded-md pb-4" autoComplete="off">
                    <div className="bg-gray-800 w-full h-16  flex justify-center items-center">
                        <div className="">
                    <span className="text-green-400 font-bold text-xl">Login</span>
                    </div>
                    </div>
                    <div className="mt-2">
                    <div className="input-container text-left w-full flex flex-col justify-center items-center">
                        <input className="input-col" type="email" name="email" value={user.email} placeholder="Enter your email address" onChange={handleChange} required></input>
                        <input className="input-col" type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange} required></input>
                        </div>
                        <div className="flex flex-col justify-center items-center pt-4">
                            <button className="w-3/4 h-auto py-2 bg-red-700 shadow-md rounded-md text-white font-bold" onClick={login}>Login</button>
                            <div className="font-semibold py-2">OR</div>
                        <button type="submit" className="w-3/4 h-auto py-2 bg-green-400 shadow-md rounded-md text-white font-bold" onClick={() => registerNavigate("/register")}>Register</button>
                        </div>
                    </div>
                    </form>
                </div> 
        </div>
    )
}

export default Login
