import { Button } from "@mui/material";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const signIn = async () => {
        try {
            await signInWithPopup(auth, provider);  
            navigate("/chats"); 
        } catch(error) {
            console.log(error.message);
        }
    }

    return (
        <div className="login">
            <div className="login__wrapper">
                <h2 className="appName">Welcome to WebChat</h2>
                <Button className="login__button"
                        color="info" 
                        variant="contained" 
                        size="large"
                        onClick={signIn}
                >
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login;