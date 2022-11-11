import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";

import Home from "./pages/HomePage/Home";
import Upload from "./pages/UploadPage/Upload";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos/:videoId" element={<Home />} />
                <Route path="/upload" element={<Upload />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
