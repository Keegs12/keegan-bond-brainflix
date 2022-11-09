import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";

import VideoSection from "./components/Video-Section/Video-Section";
import Home from "./pages/HomePage/Home";
import Upload from "./pages/UploadPage/Upload";

const apiKey = "560252be-011a-442a-8de1-456e0214c3b4";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videoId" element={<Home />} />
                <Route path="/upload" element={<Upload />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
