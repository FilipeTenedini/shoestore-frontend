import { HeaderContainer } from './style';

export default function CartHeader({ children }) {
    return (
        <HeaderContainer>
            {children}
        </HeaderContainer>
    );
}