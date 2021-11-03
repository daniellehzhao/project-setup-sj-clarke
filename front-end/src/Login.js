import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import './Login.css';
import axios from 'axios';

function Login(props){

    const [status, setStatus] = useState({})

    useEffect(() => {

        if(status.success){
        console.log(`User successfully logged in: ${status.username}`);
        }
        props.setuser(status)
    },[status])

    const handleSubmit = async e => {
        e.preventDefault()

        const username = e.target.username.value
        const password = e.target.password.value

        const formData = new FormData()

        formData.append("username", username)
        formData.append("password", password)
    

    try {
        const response = await axios({
            method: "post",
            url: "https://my.api.mockaroo.com/users.json?key=aa763330",
            data: formData,
            headers: {"Content-Type" : "multipart/form-data"},
        })

        console.log(response.data)
        setStatus(response.data)
    }catch(err){
        throw new Error(err)
    }
}



    if(!status.success)
        return(
            <div className="Login">
                <header>Login</header>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Enter Username"></input>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter Password"></input>
                    <input type="submit" value="Log In"/>
                </form>
            </div>
        )

    else return <Redirect to="/"/>
}
export default Login;