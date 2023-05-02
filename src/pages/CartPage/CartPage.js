import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import UserContext from "../../contexts/UserContext";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ThreeDots } from "react-loader-spinner";
import CartHeader from '../../components/CartHeader/CartHeader';
import CartFooter from '../../components/CartFooter/CartFooter';
import axios from 'axios';

import { Container } from './style';

export default function CartPage() {
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    // useEffect(() => {
    //     if (!userData) {
    //         alert("You must be logged in to see your cart.");
    //         navigate("/signin");
    //         return
    //     }
    // } ,[userData]);
    useEffect(() => {
        setIsLoading(true);
        const config = {
            headers: {
                Authorization: `Bearer ${userData}`
            }
        }
        axios
            .get(`${process.env.REACT_APP_API_URL}/cart`, config)
            // .then((res) => setCart(res.data.products))
            .then(() => setCart([
                {"idProduct":"644afc8ab8ba505f3ad48e5a","sizeProduct":{"$numberInt":"36"},"qtProduct":{"$numberInt":"1"},"priceProduct":{"$numberInt":"36"}},
                {"idProduct":"644af255b8ba505f3ad48e50","sizeProduct":{"$numberInt":"42"},"qtProduct":{"$numberInt":"2"},"priceProduct":{"$numberDouble":"85.5"}},
                {"idProduct":"644afb3eb8ba505f3ad48e58","sizeProduct":{"$numberInt":"35"},"qtProduct":{"$numberInt":"2"},"priceProduct":{"$numberDouble":"69.3"}},
                {"idProduct":"644af871b8ba505f3ad48e54","sizeProduct":{"$numberInt":"42"},"qtProduct":{"$numberInt":"1"},"priceProduct":{"$numberDouble":"49.6"}},
                {"idProduct":"644af9a3b8ba505f3ad48e56","sizeProduct":{"$numberInt":"36"},"qtProduct":{"$numberInt":"1"},"priceProduct":{"$numberDouble":"49.6"}},
            ]))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, [userData]);

    console.log(cart);

    return (
        <>
            <CartHeader>
                <AiOutlineArrowLeft onClick={() => navigate('/')}/>
                My Cart
            </CartHeader>
            <Container>
                { isLoading &&
                    <div>
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
                    </div>
                }
                {cart.length === 0 && !isLoading
                        ? ( <div>
                                Vocẽ não possui itens no carrinho
                            </div>) 
                        : ''
                }
            </Container>
            <CartFooter>
                <button> Continue to Payment</button>
            </CartFooter>
        </> 
    );
}