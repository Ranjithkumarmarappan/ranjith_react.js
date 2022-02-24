import React from "react";
import './Body.css';

class Signin extends React.Component{
    render(){
        return(
                           
                <form className="sign-in-container">
                    <h1>Sign In</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="facebook-icon">Facebook</i></a>
                        <a href="#" className="social"><i className="google-icon">google</i></a>
                        <a href="#" className="social"><i className="twitter-icon">twitter</i></a>
                    </div>
                    
                    <span> Use Your Account to Login</span> <br />
                    
                    <label for="Signin">Usename :</label>
                    <input type="text" id="Signin" /><br />
                    <label for="email">Enter Your Email_ID : </label>
                    <input type="text" id="email" /> <br />
                    <label for="password2">Password :</label>
                    <input type="text" id="password2" /> <br />
                    
                    <button id="signIn">Sign IN</button>
                </form>
        )
    }
}
export default Signin;