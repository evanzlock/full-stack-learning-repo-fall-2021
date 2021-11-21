import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
//import LoginLink from "../../components/Login/Login";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='main-container'>
            <div className='input-container'>
                <h1>Login</h1>
                <input className="input"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                ></input>
                <input className="input"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input>
            </div>
            <button className='button'> Login </button>
            <Link className='link' to='/signup'>
                Signup
            </Link>
        </div >
    );
}