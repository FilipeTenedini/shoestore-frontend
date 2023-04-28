import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}