import { Button } from "@mui/material";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/users";

const Login = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);

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
            {user && navigate('/chats')}
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