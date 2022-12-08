import "../styles/login.css";
import { LOGO_URL } from "../consts";

const Login = (props) => {
    const { loginSubmit } = props;
    
    return (
        <div className="">
            <img className="login-logo" src={LOGO_URL} alt="jlr"/>
            <div className="login-input-wrapper">
                <form id="login"  onSubmit={event => loginSubmit(event)} >
                    <input className="input" type="text" placeholder="username" />
                    <input className="input" type="password" placeholder="password" />
                </form>
                <input className="login-button" form="login" type="submit" value="Login"></input>

            </div>
        </div>
    ); 
}

export default Login;