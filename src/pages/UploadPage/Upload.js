import React from "react";
import thumbnail from "../../assets/images/Images/Upload-video-preview.jpg";
import "./Upload.scss";
function Upload(props) {
    return (
        <section className="Upload">
            <h1 className="Upload__title">Upload Video</h1>
            <form className="Upload__form">
                <div className="Upload__title-image-container">
                    <h2 className="Upload__thumbnail-title">VIDEO THUMBNAIL</h2>
                    <img
                        className="Upload__thumbnail-image"
                        src={thumbnail}
                        alt="bike"
                    ></img>
                </div>
                <div className="Upload__inputs-container">
                    <div className="Upload__input-container">
                        <label className="Upload__input-title" htmlFor="title">
                            TITLE OF YOUR VIDEO
                        </label>
                        <input
                            className="Upload__input"
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Add a title to your video"
                        ></input>
                    </div>
                    <div className="Upload__input-container">
                        <label
                            className="Upload__input-title"
                            htmlFor="description"
                        >
                            ADD A VIDEO DESCRIPTION
                        </label>
                        <textarea
                            className="Upload__text-area"
                            name="description"
                            id="description"
                            placeholder="Add a description to your video"
                        ></textarea>
                    </div>
                </div>
            </form>
            <div className="Upload__container">
                <button className="Upload__button">PUBLISH</button>
                <h2 className="Upload__cancel">CANCEL</h2>
            </div>
        </section>
    );
}

export default Upload;
