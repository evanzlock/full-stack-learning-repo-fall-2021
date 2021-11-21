import { useState } from "react";
import "./style.css";
export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='main-container'>
            <div className='input-container'>
                <h1>Signup</h1>
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
            <button className='button'> Signup </button>
            <Link className='link' to='/'>
                Signup
            </Link>
        </div >
    );
}