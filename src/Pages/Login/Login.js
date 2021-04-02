import { Box, Button, Grid } from '@material-ui/core';
import { blue, blueGrey } from '@material-ui/core/colors';
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import React, { useContext } from 'react';
import "./logn.css"
import { initializeAuthFramework, signInWithFb, signInWithGithub, signInWithGoogle } from './loginManager';
import { UserContext } from '../../App';
import { dark } from '@material-ui/core/styles/createPalette';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    initializeAuthFramework()
      let history = useHistory();
      let location = useLocation();
      let { from } = location.state || { from: { pathname: "/" } };

    
    const signInWith = (which) => {
        if(which === "google"){
            signInWithGoogle()?.then(res=> {
                setLoggedInUser(res);
                history.replace(from)
            })
        }
        else if (which === "fb"){
            signInWithFb()?.then(res=> {
                setLoggedInUser(res);
                history.replace(from);
            })
        }
        else if(which === "github"){
            signInWithGithub()?.then(res=> {
                setLoggedInUser(res);
                history.replace(from);
            })
        }
    }

    return (
        <>
            <Grid container justify="center">
                <Grid item sm="6">
                    <Box bgcolor={blueGrey[400]} color="secondary.contrastText"  borderRadius={16}p={5} mt={10}>
                        <Button onClick={()=> signInWith("google")} className="login-btn google" style={{width:"100%"}} variant="contained" color="primary"> Sign in With Google</Button>
                        <Button onClick={()=> signInWith("github")} className="login-btn github" style={{width:"100%"}} variant="contained" > <GitHubIcon className="icon"/> Sign in With Github</Button>
                        <Button onClick={()=> signInWith("fb")} className="login-btn facebook" style={{width:"100%"}} variant="contained" > <FacebookIcon className="icon"/> Sign in With Facebook</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default Login;