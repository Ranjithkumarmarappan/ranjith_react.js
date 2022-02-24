import react from "react";
import Createaccount from "./Createaccount";
import Signin from "./Signin";
import './Body.css';
import Overlaysignin from "./Overlaysignin";
import Overlaysignup from "./Overlaysignup";
import React,{useState} from "react";


// function click() {
//     const [show,setShow]=useState(true)




function Body() {
    return(
        <div className="form-container sign-up-contaiiner">
            <Createaccount />
            <Signin />
            {/* <Overlaysignin />
            <Overlaysignup /> */}
        </div>

    )

}

export default Body;

