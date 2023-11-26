import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import toast from "react-hot-toast";
import "./auth.css";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [authData, setAuthData] = useState(JSON.parse(window.localStorage.getItem("authData")) || {})
    const handleLogin = () => {
        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }
        if (email === authData.email && password === authData.password) {
            history.push("/kanban")
            toast.success("Login successfully")
        }
        else {
            toast.error("email or password is wrong")
        }
    }
    return (
        <>
            <div className="app_nav">
                <h1>Kanban Board</h1>
                <IoIosLogOut className="app_nav_logout" onClick={() => {
                    window.localStorage.clear();
                    history.push("/login");
                    toast.success("Logout successfully");
                }} />
            </div>
            <div className="app_boards_container">
                <div className="auth_box">
                    <h2 className="auth_heading">Login</h2>
                    <label className="auth_label">Email<span>*</span></label>
                    <input className="auth_inputs" value={email} type="text" placeholder="Enter your registered email" onChange={(e) => setEmail(e.target.value)} />
                    <label className="auth_label">Password<span>*</span></label>
                    <input className="auth_inputs" value={password} type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="auth_button" onClick={handleLogin}>Login</button>

                    <p className="auth_not_registered">Not registered yet? <span onClick={() => history.push("/register")}>Register</span></p>
                </div>
            </div>
        </>
    );
}

export default Login;

