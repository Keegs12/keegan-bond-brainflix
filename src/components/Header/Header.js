import React from "react";
import BrainFlixLogo from "../../assets/images/Logo/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Images/Mohan-muruge.jpg";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
function Header(props) {
    let navigate = useNavigate();
    const upload = () => {
        navigate("/upload");
    };
    return (
        <header className="Header">
            {/* <div className="Header__container"> */}
            <img
                className="Header__logo"
                src={BrainFlixLogo}
                alt="BrainFlixLogo, Blue Youtube"
            ></img>

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

            <button className="Header__button" onClick={() => upload()}>
                UPLOAD
            </button>
            {/* </div> */}
        </header>
    );
}

export default Header;
