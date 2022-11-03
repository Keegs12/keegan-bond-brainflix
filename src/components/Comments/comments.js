import React from "react";
import "./Comments.scss";
// import activeVideoInfo from "./data/video-details.json";
// import videoInfo from "./data/videos.json";

function Comments(props) {
    return (
        <section className="comments">
            <div className="comments-container">
                <div className="comments-container__avatar"></div>
                <div className="comments-container__content">
                    <div className="comments-container__name-date">
                        <h3 className="comments-container__name">
                            Micheal Lyons
                        </h3>
                        <p className="comments-container__date">08/09/2021</p>
                    </div>
                    <p className="comments-container__paragraph">
                        They BLEW the ROOF off at their last event, once
                        everyone started figuring out they were going.THis is
                        still simply the greatest opening of an event I have
                        EVER witnessed
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Comments;
