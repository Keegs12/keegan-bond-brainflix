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
    const [nextVideos, setNextVideos] = useState([]);
    useEffect(() => {
        axios
            .get(
                `https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`
            )
            .then((response) => {
                setNextVideos(response.data);
            });
    }, []);

    const { videoId } = useParams();

    const mainVideoId = nextVideos.length > 0 ? nextVideos[0].id : null;
    const selectedVideoId = videoId || mainVideoId;

    const filteredVideo = nextVideos.filter((nextVideo) => {
        return nextVideo.id !== selectedVideoId;
    });

    useEffect(() => {
        if (!selectedVideoId) return;
        axios
            .get(
                `https://project-2-api.herokuapp.com/videos/${selectedVideoId}/?api_key=${apiKey}`
            )
            .then((response) => {
                setVideo(response.data);
            });
    }, [selectedVideoId]);
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
                    <Video video={video} />
                    <Form />
                    <Comments video={video} />
                </section>
                <section className="Next-Videos__section">
                    <h3 className="Next-Videos__heading">Next Videos</h3>
                    <div className="Next-Videos__container">
                        {filteredVideo.map((video) => (
                            <NextVideos
                                key={video.id}
                                id={video.id}
                                title={video.title}
                                channel={video.channel}
                                image={video.image}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}

export default VideoSection;
