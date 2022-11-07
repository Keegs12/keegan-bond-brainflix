import React from "react";
import Avatar from "../../assets/images/Images/Mohan-muruge.jpg";
import "./Form.scss";
function Form(props) {
    const formHandler = (event) => {
        event.preventDefault();
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
