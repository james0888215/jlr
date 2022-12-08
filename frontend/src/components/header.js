import "../styles/header.css";
import { LOGO_URL } from "../consts";

function Header() {

    return (
        <div className="header-wrapper">
            <img src={LOGO_URL} alt="JLR" className="logo"/>
        </div>
    ); 
}

export default Header;