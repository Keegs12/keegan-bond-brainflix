import React from "react";
import "./Comments.scss";
// import activeVideoInfo from "./data/video-details.json";
// import videoInfo from "./data/videos.json";

function Comments(props) {
    // console.log(props);
    const { name, timestamp, comment } = props;
    const date = new Date(timestamp).toLocaleDateString();
    console.log(date);
    // console.log(name);
    return (
        <div className="comments-container">
            <div className="comments-container__avatar"></div>
            <div className="comments-container__content">
                <div className="comments-container__name-date">
                    <h3 className="comments-container__name">{name}</h3>
                    <p className="comments-container__date">{date}</p>
                </div>
                <p className="comments-container__paragraph">{comment}</p>
            </div>
        </div>
    );
}

export default Comments;
