import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import { Avatar } from "@material-ui/core";
import { initializeAuthFramework, logOutUser } from "../../Pages/Login/loginManager";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MyNavbar() {
    const classes = useStyles();
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    

    
    initializeAuthFramework()
    const logOut = () => {
        logOutUser().then(res => setLoggedInUser(res))
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Real Page
                    </Typography>
                    <Button onClick={() => history.push("/")} pt="4" color="inherit">
                        Home
                    </Button>
                    <Button onClick={() => history.push("/admin")} pt="4" color="inherit">
                        Admin
                    </Button>
                    <Button onClick={() => history.push("/order")} pt="4" color="inherit">
                        Orders
                    </Button>
                    {loggedInUser.isLoggedIn ? (
                        <>
                            <Button onClick={() => {
                                history.push("/login");
                                logOut()
                            }} pt="4" color="inherit">
                                LogOut
                            </Button>
                            <Avatar src={loggedInUser.photoURL} />
                        </>
                    ) : (
                        <Button onClick={() => history.push("/login")} pt="4" color="inherit">
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
