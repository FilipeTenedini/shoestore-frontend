import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.js";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInPage from "../pages/SignInPage/SignInPage";

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/signup" element={<SignUpPage />} />
                <Route exact path="/signin" element={<SignInPage />} />
            </Routes>
        </BrowserRouter>
    );
}