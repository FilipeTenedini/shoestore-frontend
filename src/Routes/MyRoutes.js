import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.js";
import SignUpPage from "../pages/SignUpPage/SignUpPage.js";
import SignInPage from "../pages/SignInPage/SignInPage.js";
import DetailPage from "../pages/DetailPage/DetailPage.js";
import CartPage from "../pages/CartPage/CartPage.js";
import OrderHistoryPage from "../pages/OrderHistoryPage/OrderHistoryPage.js";
import OrderHistoryDetailPage from "../pages/OrderHistoryDetailPage/OrderHistoryDetailPage.js";
import AddressPage from "../pages/AddressPage/AddressPage.js";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage.js";
import ConcludedOrder from "../pages/ConcludedOrder/ConcludedOrder.js";

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
                <Route exact path="/cart/checkout" element={<CheckoutPage />} />
                <Route exact path="/order" element={<OrderHistoryPage />} />
                <Route exact path="/concluded" element={<ConcludedOrder />} />
                <Route exact path="/order/:id" element={<OrderHistoryDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}