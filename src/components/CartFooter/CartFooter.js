import { CartFooterDiv } from "./style";

export default function CartFooter({ children }) {
    return (
        <CartFooterDiv>
            {children}
        </CartFooterDiv>
    );
}