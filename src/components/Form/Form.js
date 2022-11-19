import axios from "axios";
import React from "react";
import Avatar from "../../assets/images/Images/Mohan-muruge.jpg";
import "./Form.scss";
// ----------------------------------------------//

function Form({ videoId, addComment }) {
    const formHandler = (event) => {
        event.preventDefault();
        const comment = {
            comment: event.target.comments.value,
        };

        axios
            .post(`http://localhost:8080/videos/${videoId}/comments`, comment)
            .then(() => {
                axios
                    .get(`http://localhost:8080/videos/${videoId}`)
                    .then((response) => {
                        addComment(response.data);
                    });
            })
            .catch((e) => {
                console.log("Error");
            });
    };

    return (
        <section className="comments">
            <form onSubmit={formHandler} className="comments__form">
                <div className="comments__form-container">
                    <img className="comments__avatar" src={Avatar} alt=""></img>
                    <div className="comments__input-container">
                        <div className="comments__input-title">
                            <label
                                className="comments__text-area-title"
                                htmlFor="comments"
                            >
                                JOIN THE CONVERSATION
                            </label>
                            <textarea
                                className="comments__text-area-input"
                                name="comments"
                                id="comments"
                                placeholder="Add a new comment"
                            ></textarea>
                        </div>
                        <button className="comments__button" type="submit">
                            COMMENT
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Form;
