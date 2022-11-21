import React from "react";
import "./Video.scss";
import likesImage from "../../assets/images/Icons/likes.svg";
import viewsImage from "../../assets/images/Icons/views.svg";
import axios from "axios";
// ----------------------------------------------//

function Video({ video, likeVideo }) {
    const videoId = video.id;
    const videoLike = () => {
        axios
            .put(`http://localhost:8080/videos/${videoId}/likes`)
            .then(() => {
                axios
                    .get(`http://localhost:8080/videos/${videoId}`)
                    .then((response) => {
                        likeVideo(response.data);
                    });
            })
            .catch((e) => {
                alert("Error");
            });
    };
    return (
        <>
            <div className="videos"></div>
            <div className="videos-information">
                <h1 className="videos-information__title">{video.title}</h1>
                <div className="videos-information__bio">
                    <div className="videos-information__bio-container">
                        <h4 className="videos-information__channel">
                            By {video.channel}
                        </h4>
                        <h4 className="videos-information__release-date">
                            {new Date(video.timestamp).toLocaleDateString()}
                        </h4>
                    </div>
                    <div className="videos-information__bio-container">
                        <div className="videos-information__views-container">
                            <img
                                className="videos-information__views-img"
                                src={viewsImage}
                                alt="eye icon for a view"
                            ></img>
                            <h4 className="videos-information__views-title">
                                {video.views}
                            </h4>
                        </div>
                        <div className="videos-information__likes-container">
                            <img
                                onClick={() => videoLike()}
                                className="videos-information__likes-img"
                                src={likesImage}
                                alt="heart icon for a like"
                            ></img>
                            <h4 className="videos-information__likes-title">
                                {video.likes}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="videos-information__container">
                    <p className="videos-information__comment">
                        {video.description}
                    </p>
                    <p className="videos-information__number-of-comments">
                        {video.comments.length} Comments
                    </p>
                </div>
            </div>
        </>
    );
}

export default Video;
