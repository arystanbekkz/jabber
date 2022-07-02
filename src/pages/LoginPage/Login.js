import { Button } from "@mui/material";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";
import "./Login.css";

const Login = () => {

    const signIn = () => {
        signInWithPopup(auth, provider).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className="login">
            <div className="login__wrapper">
                <h2 className="appName">WebChat</h2>
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