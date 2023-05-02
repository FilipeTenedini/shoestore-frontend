import { useNavigate, useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import { ButtonCircle, BuyForm, DetaiHeader, DetailBody, DetailsConteiner, ProducDetail, Sizebuttons } from "./style";
import { GiRunningShoe } from "react-icons/gi"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function DetailPage() {
    const { productId } = useParams()
    const { userData } = useContext(UserContext);

    const [description, setDescription] = useState({});
    const [sizes, setSizes] = useState([]);
    const [productSize, setProductSize] = useState();
    const [productQT, setProductQT] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        const URL = `${process.env.REACT_APP_API_URL}/products/details/${productId}`;
        const promisse = axios.get(URL);

        promisse.then((res) => {
            setDescription(res.data)
            setSizes(res.data.stock)
        })
        promisse.catch((err) => {
            alert(err.response.data)
        })

    }, [productId]);

    function cartPut(e) {
        e.preventDefault()
        if (!userData) {
            alert("You must be logged in to add a shoe to your cart.");
            navigate("/signin");
            return
        }
        if (!productSize) {
            return alert("You must choose a shoe size to add it to your cart.")
        }
        const body = {
            idProduct: productId,
            sizeProduct: productSize,
            qtProduct: Number((Number(productQT)).toFixed(0)),
            priceProduct: Number((description.price).toFixed(2)),
            photoProduct: description.photo,
        }
        
        const URL = `${process.env.REACT_APP_API_URL}/cart`;
        const authorization = {
            headers: { Authorization: `Bearer ${userData}` }
        }

        const promisse = axios.put(URL,body,authorization)

        promisse.then((res)=>{
            alert("Item Added to the cart")
            navigate("/")
        })
        promisse.catch((err)=>{
            alert(err.response.data)
        })
    }

    return (
        <DetailsConteiner>
            <DetaiHeader>
                <h1>Shoestore</h1>
                <GiRunningShoe size={40} color="#FAFAFA" />
            </DetaiHeader>
            <ProducDetail>
                <img src={description.photo} alt={description.name} />
                <DetailBody>
                    <h1>{description.name}</h1>
                    <h2>Available sizes</h2>
                    <Sizebuttons>
                        {sizes.map((item) => (
                            <ButtonCircle
                                onClick={() => setProductSize(Number(item.size))}
                                marked={productSize === item.size}
                                key={item.size}
                            >
                                {item.size}
                            </ButtonCircle>
                        ))}
                    </Sizebuttons>
                    <h2>Description:</h2>
                    <h3>{description.desc}</h3>
                    <BuyForm onSubmit={cartPut}>
                        <h1>{`$${description.price?.toFixed(2)}`}</h1>
                        <input
                            type="number"
                            placeholder="Quantity"
                            value={productQT} 
                            onChange={(e)=> setProductQT(e.target.value)}
                            required
                        >
                        </input>
                        <button>Add to cart</button>
                    </BuyForm>
                </DetailBody>
            </ProducDetail>
            <Footer />
        </DetailsConteiner>
    );
}