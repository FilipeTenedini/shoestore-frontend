import { Link } from "react-router-dom";
import { FooterDiv, NavigateButton } from "./style";
import { IoHome, IoCart, IoList } from "react-icons/io5";

export default function Footer({ token }) {
    return (
        <FooterDiv>
            <Link to="/">
                <NavigateButton>
                    <IoHome size={30} color="#FAFAFA" />
                    <div>Home</div>
                </NavigateButton>
            </Link>
            <Link to="/cart">
                <NavigateButton>
                    <IoCart size={30} color="#FAFAFA" />
                    <div>Cart</div>
                </NavigateButton>
            </Link>
            <Link to={`/order`}>
                <NavigateButton>
                    <IoList size={30} color="#FAFAFA" />
                    <div>Order History</div>
                </NavigateButton>
            </Link>
        </FooterDiv>
    )
}