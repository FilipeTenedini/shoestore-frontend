import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import OrderListItem from "../../components/OrderListItem/OrderListItem";
import { OrdersContainer, OrdersList, PageContainer, PageHeader } from "./style";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router";

export default function OrderHistoryPage() {
    const [orders, setOrders] = useState([]);
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();
    console.log(orders);

    useEffect(() => {
        if (userData) {
            const config = {
                headers: {
                    Authorization: `Bearer ${userData}`,
                },
            };

            axios.get(`${process.env.REACT_APP_API_URL}/order`, config)
                .then((response) => {
                    setOrders(response.data);
                    console.log(response.data);
                })
                .catch((err) => console.log(err.message));
        }else{
            navigate('/signin');
        }
        // eslint-disable-next-line
    }, []);

    return (
        <PageContainer>
            <PageHeader>Order History</PageHeader>
            <OrdersContainer>
                <h2>Purchases</h2>
                <OrdersList>
                    {orders.map(order => <OrderListItem key={order._id} order={order} />)}
                </OrdersList>
            </OrdersContainer>
            <Footer />
        </PageContainer>
    );
}