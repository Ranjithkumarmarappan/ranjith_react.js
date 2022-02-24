import React from "react";
import Address from "./Address";
import Compinfo from "./Compinfo";
import Contactus from "./Contactus";
import './Footer.css';
import Socialid from "./Socialid";

class Footer extends React.Component{
    render(){
        return(
            <div class="footer-head">
                <Address />
                <Compinfo />
                <Contactus />
                <Socialid />

            </div>
        )
    }
}
export default Footer;