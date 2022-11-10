import React from "react";
import "./Video.scss";
import likesImage from "../../assets/images/Icons/likes.svg";
import viewsImage from "../../assets/images/Icons/views.svg";
function Video(props) {
    const { title, channel, timestamp, views, likes, description, comments } =
        props.comments;

    const date = new Date(timestamp).toLocaleDateString();
    return (
        <>
            <div className="videos"></div>
            <div className="videos-information">
                <h2 className="videos-information__title">{title}</h2>
                <div className="videos-information__bio">
                    <div className="videos-information__bio-container">
                        <h4 className="videos-information__channel">
                            By {channel}
                        </h4>
                        <h4 className="videos-information__release-date">
                            {date}
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
                                {views}
                            </h4>
                        </div>
                        <div className="videos-information__likes-container">
                            <img
                                className="videos-information__likes-img"
                                src={likesImage}
                                alt="heart icon for a like"
                            ></img>
                            <h4 className="videos-information__likes-title">
                                {likes}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="videos-information__container">
                    <p className="videos-information__comment">{description}</p>
                    <p className="videos-information__number-of-comments">
                        {comments.length} Comments
                    </p>
                </div>
            </div>
        </>
    );
}

export default Video;
