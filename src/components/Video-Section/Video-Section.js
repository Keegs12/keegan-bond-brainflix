import React from "react";
import { useState, useEffect } from "react";

import "./Video-Section.scss";
import Form from "../Form/Form";
import Comments from "../Comments/comments";
import NextVideos from "../Next-Videos/NextVideos";
import Video from "../Video/Video";
import axios from "axios";
import { useParams } from "react-router-dom";

function VideoSection() {
    const apiKey = "560252be-011a-442a-8de1-456e0214c3b4";

    const [video, setVideo] = useState(null);

    useEffect(() => {
        axios
            .get(
                `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=${apiKey}`
            )
            .then((response) => {
                setVideo(response.data);
            });
    }, []);

    const { videoId } = useParams();
    useEffect(() => {
        axios
            .get(
                `https://project-2-api.herokuapp.com/videos/${videoId}/?api_key=${apiKey}`
            )
            .then((response) => {
                setVideo(response.data);
            });
    }, [videoId]);
    if (video === null) {
        return <main>loading</main>;
    }

    return (
        <section>
            <div className="Videos-container">
                <video
                    className="Videos-container__video"
                    controls
                    poster={video.image}
                ></video>
            </div>
            <div className="Video-content">
                <section className="Video-Form-Comment">
                    <Video comments={video} />
                    <Form />
                    <Comments video={video} />
                </section>
                <section className="Next-Videos__section">
                    <h3 className="Next-Videos__heading">Next Videos</h3>
                    <div className="Next-Videos__container">
                        <NextVideos activeVideo={video} />
                    </div>
                </section>
            </div>
        </section>
    );
}

export default VideoSection;
