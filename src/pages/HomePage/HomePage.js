import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { HomeContainer, HomeHeader, ProductsDescription, ProductsExibition } from "./style";
import { BiFemale, BiMale, BiMaleFemale } from "react-icons/bi";
import { GiRunningShoe } from "react-icons/gi";
import { TbCircleLetterG } from "react-icons/tb";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {

    const [gender, setGender] = useState('all');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const URL = `${process.env.REACT_APP_API_URL}/products/${gender}`;

        const promisse = axios.get(URL);

        promisse.then((res) => {
            setProducts(res.data)
        })
        promisse.catch((err) => {
            alert(err.response.data)
        })

    }, [gender]);

    return (
        <HomeContainer>
            <HomeHeader>
                <div>
                    <h1>Shoestore</h1>
                    <GiRunningShoe size={40} color="#FAFAFA" />
                </div>
                <div>
                    <button onClick={() => setGender('female')}>
                        <BiFemale size={20} color="#FAFAFA" />
                        <div>Female</div>
                    </button>
                    <button onClick={() => setGender('male')}>
                        <BiMale size={20} color="#FAFAFA" />
                        <div>Male</div>
                    </button>
                    <button onClick={() => setGender('all')}>
                        <BiMaleFemale size={20} color="#FAFAFA" />
                        <div>All</div>
                    </button>
                </div>
            </HomeHeader>
            <ul>
                {products.map((product) => (
                    <ProductsExibition key={product._id}>
                        <Link to={`/products/details/${product._id}`}>
                            <img src={product.photo} alt={`${product.name}`} />
                            <ProductsDescription>
                                <h1>{product.name}</h1>
                                <div>
                                    <div>
                                        <TbCircleLetterG color="FAFAFA" />
                                        <h1>{product.gender}</h1>
                                    </div>
                                    <h2>{`$${product.price?.toFixed(2)}`}</h2>
                                </div>
                            </ProductsDescription>
                        </Link>
                    </ProductsExibition>
                ))}
            </ul>
            <Footer />
        </HomeContainer>
    );
}