import React from 'react';
import './Login.css';
import {Button} from "@material-ui/core";
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider/StateProvider';
import { actionTypes } from '../StateProvider/Reducer';

export default function Login() {
    /*
        dispatch is how we shoot things into data layer
        useStateValue to use data Layer
    */
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
                /*  
                    action type is set user and result.user is the
                    user that is returned from user
                    and this will push the user data to the data layer
                */
                dispatch({
                    type : actionTypes.SET_USER, 
                    user : result.user
                })
                /*
                 *  Now this user grabs the value of user from google,
                 *  then passes to the reducer in which we return this user as
                    user:action.user,
                 *  then we pass it to our app.js in the {user} which 
                 *  then passes to the function where we check if the user exsits 
                    or not, and since now we pass the user, we get to enter 
                    the app after login in successfully.
                 */
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-512.png" 
                    alt="slack-logo"
                />
                <h1>Sign in to Slack</h1>
                <p>animesh.jha.slack.com</p>
                <Button onClick = {signIn} >Sign in with Google</Button>
            </div>
        </div>
    )
}
