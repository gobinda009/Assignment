import "./Login.css"
import { Link } from "react-router-dom";

function Login(){
    return(
    <div className="login">
        <h2 className="heading1">
        Signin to your PopX account
        </h2>
        <p className="detail">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter email address"/>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter password"/>
        <Link to='/profile'><button className="btn">Login</button></Link>
        </div>
            


    </div>
    );

}

export default Login;