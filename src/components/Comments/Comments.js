import React from "react";
import "./Comments.scss";
// ----------------------------------------------//

function Comments({ video }) {
    const { comments } = video;

    return comments.map((comment) => (
        <div key={comment.id} className="comments-container">
            <div className="comments-container__avatar"></div>
            <div className="comments-container__content">
                <div className="comments-container__name-date">
                    <h3 className="comments-container__name">{comment.name}</h3>
                    <p className="comments-container__date">
                        {new Date(comment.timestamp).toLocaleDateString()}
                    </p>
                </div>
                <p className="comments-container__paragraph">
                    {comment.comment}
                </p>
            </div>
        </div>
    ));
}

export default Comments;
