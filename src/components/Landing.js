import "./Landing.css"
import { Link } from "react-router-dom";

function Landing(){
    return(
    <div className="landing">
    <h2 className="heading">
    Welcome to PopX
    </h2>
    <p className="intro">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    </p>
    <Link to='/create'><button className="create">
        Create Account
    </button></Link>
    <Link to='/login'><button className="alreadycreated">
    Already Registered? Login
    </button></Link>

    </div>

    );
}

export default Landing;