import react from "react";
import "./flipbox.css";

function Flipbox () {

    const [hide, setHide] = useState()
    return(
        <div>
            <div className="overlay-signin">
                    <h1>Welcome Back..!</h1>
                    <p>Join Us to enter the world of Magics</p>
                    <button >Sign In</button>
            </div>
        
            <div className="overlay-signup">
                <h1>Hello Friends...!</h1>
                <p>Enter Your Personal details <br />and start your Journey with Us</p>
                <button>Sign Up</button>
            </div>

        </div>  

    )
}

export default Flipbox;