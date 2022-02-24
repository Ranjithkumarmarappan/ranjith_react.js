import React from "react";

import './Body.css';

class Createaccount extends React.Component{
    render(){
        return(
            <form>
                 <h1>Create Account</h1>
                        <div className="social-container">

                            <a href="#" className="social"><i className="facebook-icon">Facebook</i></a>
                            <a href="#" className="social"><i className="google-icon">google</i></a>
                            <a href="#" className="social"><i className="twitter-icon">twitter</i></a>
                        </div>
                        <span>---Use Your Email Registeration---</span>  <br />  

                            <label for="Signup">Enter Your Name :</label>
                            <input type="text" id="Signup" /><br />
                            <label for="email">Enter Your Email_ID : </label>
                            <input type="text" id="email" /> <br />
                            <label for="password1">New Password :</label>
                            <input type="text" id="password1" /> <br />
                            <label for="password2">Confirm Password :</label>
                            <input type="text" id="password2" /> <br />

                        <button id="signUp">Sign Up</button>
                            
                            
                            
            </form>

        )
    }
}
export default Createaccount;