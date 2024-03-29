import React from "react";
// import thumbnail from "../../assets/images/Images/Upload-video-preview.jpg";
import "./Upload.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// ----------------------------------------------//

function Upload() {
    let navigate = useNavigate();
    const cancel = () => {
        navigate("/");
    };
    const publish = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        const titleInput = event.target.title;
        const descriptionInput = event.target.description;
        if (!title) {
            alert("Invalid input entry");
            titleInput.className = "Upload__input --error";
        } else if (!description) {
            alert("Invalid input entry");
            descriptionInput.className = "Upload__text-area --error";
        } else {
            alert("You have successfully uploaded your video");
            navigate("/");
        }

        const newVideo = {
            title: event.target.title.value,
            description: event.target.description.value,
        };

        axios.post("http://localhost:8080/videos", newVideo).catch((e) => {
            alert("Error");
        });
    };

    return (
        <section className="Upload">
            <h1 className="Upload__title">Upload Video</h1>
            <form onSubmit={publish} className="Upload__form">
                <div className="Upload__title-image-container">
                    <h2 className="Upload__thumbnail-title">VIDEO THUMBNAIL</h2>
                    <img
                        className="Upload__thumbnail-image"
                        src={"http://localhost:8080/images/uploadVideo.jpg"}
                        alt="bike"
                    ></img>
                </div>
                <div className="Upload__inputs-container">
                    <div className="Upload__input-container">
                        <label className="Upload__input-title" htmlFor="title">
                            TITLE OF YOUR VIDEO
                        </label>
                        <input
                            className={`${publish ? "Upload__input" : "error"}`}
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
                <div className="Upload__container">
                    <button
                        type="submit"
                        className="Upload__button"
                        // onClick={() => uploadVideo()}
                    >
                        PUBLISH
                    </button>
                    <h2 onClick={() => cancel()} className="Upload__cancel">
                        CANCEL
                    </h2>
                </div>
            </form>
        </section>
    );
}

export default Upload;
