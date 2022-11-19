import React from "react";
import { useState, useEffect } from "react";

import "./Video-Section.scss";
import Form from "../Form/Form";
import Comments from "../Comments/Comments";
import NextVideos from "../Next-Videos/NextVideos";
import Video from "../Video/Video";
import axios from "axios";
import { useParams } from "react-router-dom";
// ----------------------------------------------//

function VideoSection() {
    const [video, setVideo] = useState(null);
    const [nextVideos, setNextVideos] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/videos")
            .then((response) => {
                setNextVideos(response.data);
            })
            .catch((e) => {
                console.log(e);
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
            .get(`http://localhost:8080/videos/${selectedVideoId}`)
            .then((response) => {
                setVideo(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [selectedVideoId]);
    if (video === null) {
        return <main>loading</main>;
    }

    const addNewComment = (comment) => {
        setVideo(comment);
    };

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
                <section className="Video-content__container">
                    <Video video={video} />
                    <Form
                        videoId={selectedVideoId}
                        addComment={addNewComment}
                    />
                    <Comments video={video} />
                </section>
                <section className="Next-Videos">
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
