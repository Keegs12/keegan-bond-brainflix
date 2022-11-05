import React from "react";
import "./NextVideos.scss";
import TestImage from "../../assets/images/Images/Mohan-muruge.jpg";

function NextVideos(props) {
    const { title, channel, image, selectedVideo, id } = props;
    // console.log(title);
    return (
        <div
            onClick={() => selectedVideo(id)}
            className="Next-Videos__video-container"
        >
            <div>
                <img className="Next-Videos__image" src={image}></img>
            </div>
            <div className="Next-Videos__sub-container">
                <h3 className="Next-Videos__title">{title}</h3>
                <h3 className="Next-Videos__channel">{channel}</h3>
            </div>
        </div>
    );
}

export default NextVideos;
