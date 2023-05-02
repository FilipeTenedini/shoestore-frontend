import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.js";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import CartPage from "../pages/CartPage/CartPage.js";
import OrderHistoryPage from "../pages/OrderHistoryPage/OrderHistoryPage.js";
import OrderHistoryDetailPage from "../pages/OrderHistoryDetailPage/OrderHistoryDetailPage.js";
import AddressPage from "../pages/AddressPage/AddressPage.js";

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/products/details/:productId" element={<DetailPage />}/>
                <Route exact path="/signup" element={<SignUpPage />} />
                <Route exact path="/signin" element={<SignInPage />} />
                <Route exact path="/cart" element={<CartPage />} />
                <Route exact path="/cart/address" element={<AddressPage />} />
                <Route exact path="/order" element={<OrderHistoryPage />} />
                <Route exact path="/order/:id" element={<OrderHistoryDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}