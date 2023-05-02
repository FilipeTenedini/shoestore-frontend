import { Link } from 'react-router-dom';
import CartHeader from '../../components/CartHeader/CartHeader';
import CartFooter from '../../components/CartFooter/CartFooter';
import { Container } from './style';
import { Si4Chan } from 'react-icons/si';

export default function ConcludedOrder() {
    return (
        <>
            <CartHeader>
                Completed Order
            </CartHeader>
            <Container>
                <section>
                    <Si4Chan />
                    Thank you for preference!
                    <Link to="/">
                        Go back home.
                    </Link>
                </section>
            </Container>
            <CartFooter>
            </CartFooter>
        </> 
    );
}