import React from "react";
import "./Comments.scss";
import remove from "../../assets/images/Icons/remove.png";
import axios from "axios";
// ----------------------------------------------//

function Comments({ video, removeComment }) {
    const { comments } = video;

    const deleteComment = (commentId) => {
        const videoId = video.id;
        axios
            .delete(
                `http://localhost:8080/videos/${videoId}/comments/${commentId}`
            )
            .then(() => {
                axios
                    .get(`http://localhost:8080/videos/${videoId}`)
                    .then((response) => {
                        removeComment(response.data);
                    });
            })
            .catch((e) => {
                alert("Error");
            });
    };
    return comments.map((comment) => (
        <div key={comment.id} className="comments-container">
            <div className="comments-container__avatar"></div>
            <div className="comments-container__content">
                <div className="comments-container__name-date">
                    <h3 className="comments-container__name">{comment.name}</h3>
                    <div className="comments-container__date-remove">
                        <p className="comments-container__date">
                            {new Date(comment.timestamp).toLocaleDateString()}
                        </p>
                        <img
                            className="comments-container__remove"
                            src={remove}
                            alt="remove icon"
                            onClick={() => deleteComment(comment.id)}
                        ></img>
                    </div>
                </div>
                <p className="comments-container__paragraph">
                    {comment.comment}
                </p>
            </div>
        </div>
    ));
}

export default Comments;
