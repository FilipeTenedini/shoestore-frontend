import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import { AddressInfo, PageContainer, PageHeader, ProductsContainer, ProductsList, TotalAmount } from "./style";
import dayjs from "dayjs";
import { OrderDetailItem } from "../../components/OrderDetailItem/OrderDetailItem";
import Footer from "../../components/Footer/Footer";

export default function OrderHistoryDetailPage() {
    const { id } = useParams();
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();
    const [orderData, setOrderData] = useState(undefined);
    const [total, setTotal] = useState(0);
    console.log(orderData);

    useEffect(() => {
        if (userData) {
            const config = {
                headers: {
                    Authorization: `Bearer ${userData}`,
                },
            };

            axios.get(`${process.env.REACT_APP_API_URL}/order/${id}`, config)
                .then((response) => {
                    const data = response.data
                    let sum = 0;
                    setOrderData(data);
                    data.products.forEach(p => sum += (p.priceProduct * p.qtProduct));
                    setTotal(sum);
                })
                .catch((err) => console.log(err.message));
        } else {
            navigate('/signin');
        }
        // eslint-disable-next-line
    }, []);

    if (orderData === undefined) {
        return (
            <PageContainer>
                <PageHeader>Details</PageHeader>
                <ProductsContainer>
                </ProductsContainer>
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <PageHeader>Details</PageHeader>
            <ProductsContainer>
                <h2>{dayjs(orderData.data).format("DD/MM/YYYY")}</h2>
                <ProductsList>
                    {orderData.productsInfo.map((p) => (
                        <OrderDetailItem
                            key={p._id}
                            name={p.name}
                            picture={p.photo}
                            price={p.price}
                            product={orderData.products.find(pr => pr.idProduct === p._id)}
                        />
                    ))}
                </ProductsList>
            </ProductsContainer>
            <AddressInfo>
                <h3>Delivery Address</h3>
                {<p>{`${orderData.address.street} ${orderData.address.number}, ${orderData.address.city}`}</p>}
                <p>{`Zipcode: ${orderData.address.zipcode}`}</p>
            </AddressInfo>
            <TotalAmount>
                <h3>Payment</h3>
                <span>{orderData.payment}</span>
            </TotalAmount>
            <TotalAmount>
                <h3>TotalAmount</h3>
                <span>{`$${Number(total).toFixed(2)}`}</span>
            </TotalAmount>
            <Footer />
        </PageContainer>
    );
}