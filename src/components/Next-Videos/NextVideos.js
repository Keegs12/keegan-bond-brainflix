import React from "react";
import "./NextVideos.scss";

import { Link } from "react-router-dom";

function NextVideos({ title, channel, image, id }) {
    return (
        <Link className="Next-Videos__links" key={id} to={`/videos/${id}`}>
            <div className="Next-Videos__video-container">
                <div>
                    <img
                        className="Next-Videos__image"
                        src={image}
                        alt="thumbnails for each individual video."
                    ></img>
                </div>
                <div className="Next-Videos__sub-container">
                    <h3 className="Next-Videos__title">{title}</h3>
                    <h3 className="Next-Videos__channel">{channel}</h3>
                </div>
            </div>
        </Link>
    );
}

export default NextVideos;
