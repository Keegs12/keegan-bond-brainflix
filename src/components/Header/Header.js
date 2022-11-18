import React from "react";
import BrainFlixLogo from "../../assets/images/Logo/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Images/Mohan-muruge.jpg";
import "./Header.scss";
import { Link } from "react-router-dom";
/*   let navigate = useNavigate();
    const upload = () => {
        navigate("/upload");
    };
    const home = () => {
        navigate("/");
    }; 
Could use this method instead of Link to go to the home page or upload page */
// ----------------------------------------------//

function Header() {
    return (
        <header className="Header">
            {/* <div className="Header__container"> */}
            <Link to="/">
                <img
                    className="Header__logo"
                    src={BrainFlixLogo}
                    alt="BrainFlixLogo, Blue Youtube"
                ></img>
            </Link>

            <label
                className="Header__search-bar-input"
                htmlFor="search"
            ></label>
            <input
                className="Header__search-bar"
                type="text"
                name="search"
                id="search"
                placeholder="Search"
            ></input>
            <img
                className="Header__avatar"
                src={Avatar}
                alt="BrainFlix Avatar Icon"
            ></img>
            <Link to="/upload">
                <button className="Header__button">UPLOAD</button>
            </Link>
        </header>
    );
}

export default Header;
