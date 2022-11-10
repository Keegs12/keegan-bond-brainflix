import React from "react";
import "./NextVideos.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NextVideos({ activeVideo }) {
    const apiKey = "560252be-011a-442a-8de1-456e0214c3b4";
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        axios
            .get(
                `https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`
            )
            .then((response) => {
                setVideos(response.data);
            });
    }, []);
    const filteredVideo = videos.filter((video) => {
        return video.id !== activeVideo.id;
    });

    return filteredVideo.map((video) => (
        <NavLink
            className="Next-Videos__links"
            key={video.id}
            to={`/videos/${video.id}`}
        >
            <div className="Next-Videos__video-container">
                <div>
                    <img
                        className="Next-Videos__image"
                        src={video.image}
                        alt="thumbnails for each individual video."
                    ></img>
                </div>
                <div className="Next-Videos__sub-container">
                    <h3 className="Next-Videos__title">{video.title}</h3>
                    <h3 className="Next-Videos__channel">{video.channel}</h3>
                </div>
            </div>
        </NavLink>
    ));
}

export default NextVideos;
