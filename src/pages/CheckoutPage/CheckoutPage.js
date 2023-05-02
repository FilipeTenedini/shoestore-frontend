import { useEffect, useContext, useState, useRef } from 'react';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ThreeDots } from "react-loader-spinner";
import CartHeader from '../../components/CartHeader/CartHeader';
import CartFooter from '../../components/CartFooter/CartFooter';
import PaymentMethodForm from './PaymentMethodForm/PaymentMethodForm';
import { Container, OrderDetails } from './style';

export default function CheckoutPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const paymentRef = useRef();
    const { state: {city, number, street, zipcode} } = useLocation();
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userData) {
            alert("You must be logged in to see your cart.");
            navigate("/signin");
            return
        }
        setIsLoading(true);
        const config = {
            headers: { Authorization: `Bearer ${userData}` }
        }
        axios
            .get(`${process.env.REACT_APP_API_URL}/cart`, config)
            .then((res) => setCart(res.data.products))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, [userData]);

    useEffect(() => {
        cart && setTotalPrice(cart.reduce((acc, val) => acc + (val.priceProduct * val.qtProduct), 0));
    }, [cart]);

    function handleSelect(e) {
        paymentRef.method = e.target.value
    }

    function confirmOrder() {
        const order = {
            data: new Date().getTime(),
            payment: paymentRef.method,
            address:{
                city, street,number, zipcode
            }
        }
        const config = {
            headers: {  Authorization: `Bearer ${userData}` }
        }
        axios
            .post(`${process.env.REACT_APP_API_URL}/order`, order, config)
            .then(() => navigate('/concluded'))
            .catch(err => console.log(err));
    }
    return (
        <>
            <CartHeader>
                <AiOutlineArrowLeft onClick={() => navigate('/cart/address')} />
                Order details
            </CartHeader>
            <Container>
            { isLoading &&
                <span>
                    <ThreeDots
                        height="20"
                        width="40"
                        radius="26"
                        color="#1C1C1C"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </span>
                }
                {!isLoading && cart.length === 0
                    ? ( <span>
                            Your cart is empty! 
                        </span>
                    ) 
                    : ( <section>
                            <PaymentMethodForm handleSelect={handleSelect} />
                            <OrderDetails totalPrice={totalPrice}>
                                <div><span>Order Details:</span></div>
                                <div>Zipcode: {zipcode}</div>
                                <div>City: {city}</div>
                                <div>Street: {street}</div>
                                <div>Number: {number}</div>
                                <div><span>Total Amount: $ {totalPrice.toFixed(2)}</span></div>
                            </OrderDetails>
                        </section>
                    )
               }
            </Container>
            <CartFooter>
                <button onClick={confirmOrder}> Send order </button>
            </CartFooter>
        </> 
    );
}