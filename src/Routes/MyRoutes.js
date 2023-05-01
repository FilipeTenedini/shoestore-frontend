import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.js";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import DetailPage from "../pages/DetailPage/DetailPage";

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/products/details/:productId" element={<DetailPage />}/>
                <Route exact path="/signup" element={<SignUpPage />} />
                <Route exact path="/signin" element={<SignInPage />} />
            </Routes>
        </BrowserRouter>
    );
}