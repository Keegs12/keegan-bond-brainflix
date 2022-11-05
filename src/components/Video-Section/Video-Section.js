import React from "react";
import { useState } from "react";
import activeVideoInfo from "../../data/video-details.json";
import videoInfo from "../../data/videos.json";
import "./Video-Section.scss";
import Form from "../Form/Form";
import Comments from "../Comments/comments";
import NextVideos from "../Next-Videos/NextVideos";
import Video from "../Video/Video";

function VideoSection(props) {
    const [video, setVideo] = useState(activeVideoInfo[0]);
    const videoComments = video.comments;

    const clickHandler = (id) => {
        const selectedVideo = activeVideoInfo.find((video) => video.id === id);

        setVideo(selectedVideo);
        console.log(id);
        console.log(selectedVideo);
    };

    const filteredVideo = videoInfo.filter((vid) => {
        return vid.id !== video.id;
    });
    console.log(filteredVideo);

    return (
        <section>
            <video
                className="videos__video"
                controls
                poster={video.image}
            ></video>
            <div className="Video-content">
                <section className="Video-Form-Comment">
                    <Video comments={video} />
                    <Form />
                    {videoComments.map((comment) => (
                        <Comments
                            key={comment.id}
                            name={comment.name}
                            comment={comment.comment}
                            timestamp={comment.timestamp}
                        />
                    ))}
                </section>

                {/* <section className="Videos-Section"> */}
                <section className="Next-Videos__section">
                    <h3>Next Videos</h3>
                    <div className="Next-Videos__container">
                        {filteredVideo.map((video) => (
                            <NextVideos
                                key={video.id}
                                id={video.id}
                                title={video.title}
                                channel={video.channel}
                                image={video.image}
                                selectedVideo={clickHandler}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}

export default VideoSection;
