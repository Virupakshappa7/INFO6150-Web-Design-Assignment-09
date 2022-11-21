// import { PromiseProvider } from "mongoose";
import React, {useState} from "react"
import { Navigate } from "react-router-dom";

export default function Login(props){
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');
    const [navigate, setNavigate] = useState(false);

    const handleSubmit = () =>{
        console.log("logging in");
        fetch("http://localhost:8089/user/login",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:pass
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.message==="login success"){
                console.log("login success");
                setNavigate(true);
            }
            
        })
    }

    return (
        <>
        {navigate?<Navigate to="/home"/>:""}
        <div>
            <label >Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type = "email" placeholder="your email" id='email' name = 'email' />
            <label >Password</label>
            <input onChange={(e)=>{setPass(e.target.value)}} type = "password" placeholder=" ********" id='password' name = 'password' />
            <button onClick={() => handleSubmit()} type = "submit">Login</button>
        </div>
        </>
    )
}