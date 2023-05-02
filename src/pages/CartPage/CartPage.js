import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import UserContext from "../../contexts/UserContext";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ThreeDots } from "react-loader-spinner";
import axios from 'axios';
import CartHeader from '../../components/CartHeader/CartHeader';
import CartFooter from '../../components/CartFooter/CartFooter';
import CartItem from "../../components/CartItem/CartItem";
import { Container, OrderDetailsContainer } from './style';

export default function CartPage() {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    
    // useEffect(() => {
    //     if (!userData) {
    //         alert("You must be logged in to see your cart.");
    //         navigate("/signin");
    //         return
    //     }
    // }, [userData]);

    useEffect(() => {
        setIsLoading(true);
        const config = {
            headers: {
                Authorization: `Bearer ${userData}`
            }
        }
        axios
            .get(`${process.env.REACT_APP_API_URL}/cart`, config)
            .then((res) => setCart(res.data.products))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, [userData]);

    useEffect(() => {
        setTotalPrice(cart.reduce((acc, val) => acc + (val.priceProduct * val.qtProduct), 0));
    }, [cart]);
    console.log(totalPrice);

    return (
        <>
            <CartHeader>
                <AiOutlineArrowLeft onClick={() => navigate('/')}/>
                My Cart
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
                {cart.length === 0 && !isLoading
                    ? ( <span>
                            Vocẽ não possui itens no carrinho
                        </span>
                    ) 
                    : ( <section>
                        {
                            cart.map(item =>  <CartItem  key={item.photoProduct} item={item} />)
                        }
                        <OrderDetailsContainer totalPrice={totalPrice}>
                                <p>Total: $ {totalPrice}</p>
                        </OrderDetailsContainer>
                        </section>
                    )
               }

            </Container>
            <CartFooter>
                <button onClick={() => navigate('/cart/address')}> Add new address </button>
            </CartFooter>
        </> 
    );
}