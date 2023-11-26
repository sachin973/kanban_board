import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import toast from 'react-hot-toast';
import { IoIosLogOut } from "react-icons/io";
import "./auth.css";

function Register() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleRegister = () => {
        // Basic field validation
        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        const authData = {
            email: email,
            password: password,
        };
        window.localStorage.setItem("authData", JSON.stringify(authData));
        history.push("/kanban");
    };

    return (
        <>      <div className="app_nav">
            <h1>Kanban Board</h1>
            <IoIosLogOut className="app_nav_logout" onClick={() => {
                window.localStorage.clear();
                history.push("/");
                toast.success("Logout successfully");
            }} />
        </div>
            <div className="app_boards_container">
                <div className="auth_box">
                    <h2 className="auth_heading">Register</h2>
                    <label className="auth_label">
                        Email<span>*</span>
                    </label>
                    <input
                        className="auth_inputs"
                        value={email}
                        type="text"
                        placeholder="Enter your registered email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="auth_label">
                        Password<span>*</span>
                    </label>
                    <input
                        className="auth_inputs"
                        value={password}
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="auth_button" onClick={handleRegister}>
                        Register
                    </button>
                    <p className="auth_not_registered">Already have an account! <span onClick={() => history.push("/")}>Login</span></p>
                </div>
            </div>
        </>
    );
}

export default Register;
