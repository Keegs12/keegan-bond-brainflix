import React from "react";
import { useState } from "react";
import activeVideoInfo from "../../data/video-details.json";
import videoInfo from "../../data/videos.json";
import "./Video-Section.scss";
import Form from "../Form/Form";
import Comments from "../Comments/comments";
import NextVideos from "../Next-Videos/NextVideos";
import Video from "../Video/Video";

console.log(activeVideoInfo);
// console.log(videoInfo);
// console.log(activeVideoInfo[0].image);
// console.log(activeVideoInfo.comments);
function VideoSection(props) {
    const videoComments = activeVideoInfo[0].comments;
    // console.log(videoInfo);
    const [comments, setComments] = useState(activeVideoInfo[0]);
    // console.log(videoComments);
    // console.log(videoInfo);
    // console.log(comments);
    return (
        <section>
            {/* <div className="videos">
                <video
                    className="videos__video"
                    controls
                    poster={activeVideoInfo[0].image}
                ></video>
            </div>
            <div className="videos-information">
                <h2 className="videos-information__title">
                    {activeVideoInfo[0].title}
                </h2>
                <div className="videos-information__bio">
                    <div className="videos-information__bio-container">
                        <h4 className="videos-information__channel">
                            By {activeVideoInfo[0].channel}
                        </h4>
                        <h4 className="videos-information__release-date">
                            {activeVideoInfo[0].timestamp}
                        </h4>
                    </div>
                    <div className="videos-information__bio-container">
                        <div className="videos-information__views-container">
                            <img
                                className="videos-information__views-img"
                                src={views}
                                alt="eye icon for a view"
                            ></img>
                            <h4 className="videos-information__views-title">
                                {activeVideoInfo[0].views}
                            </h4>
                        </div>
                        <div className="videos-information__likes-container">
                            <img
                                className="videos-information__likes-img"
                                src={likes}
                                alt="heart icon for a like"
                            ></img>
                            <h4 className="videos-information__likes-title">
                                {activeVideoInfo[0].likes}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="videos-information__container">
                    <p className="videos-information__comment">
                        {activeVideoInfo[0].description}
                    </p>
                    <p className="videos-information__number-of-comments">
                        {activeVideoInfo[0].comments.length} Comments
                    </p>
                </div>
            </div> */}
            <Video comments={comments} />
            <Form />
            {videoComments.map((comment) => (
                <Comments
                    key={comment.id}
                    name={comment.name}
                    comment={comment.name}
                    timestamp={comment.timestamp}
                />
            ))}
            <h3>Next Videos</h3>
            <section className="Videos-Section">
                {videoInfo.map((video) => (
                    <NextVideos
                        key={video.id}
                        title={video.title}
                        channel={video.channel}
                        image={video.image}
                    />
                ))}
            </section>
        </section>
    );
}

export default VideoSection;
