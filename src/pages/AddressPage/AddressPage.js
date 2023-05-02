import { useContext, useEffect, useRef } from "react";
import { useNavigate } from 'react-router';
import UserContext from "../../contexts/UserContext";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import CartHeader from '../../components/CartHeader/CartHeader';
import CartFooter from '../../components/CartFooter/CartFooter';
import { Container } from './style';
import AddressForm from "./AddressForm/AddressForm";

export default function AddressPage() {
    const addressFormValue = useRef();
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    
    useEffect(() => {
        if (!userData) {
            alert("You must be logged in to see your configs.");
            navigate("/signin");
            return
        }
    }, [userData, navigate]);

    function validForm(){
        const {
            city: {value: city}, number: {value: number}, street: {value: street}, zipcode: {value: zipcode}
        } = addressFormValue

        if (zipcode.length !== 8) return alert('Zip code can only be 8 characters long');

        if (!city || !number || !street || !zipcode) {
           return alert('Fill in the form correctly');
        }
        addressFormValue.obj = { 
            city,
            number: number.replace('-', '').replace('.', '').trim(),
            street,
            zipcode: zipcode.replace('-', '').replace('.', '').trim()
        };

        navigate("/cart/checkout", {state: addressFormValue.obj});

    }

    return (
        <>
            <CartHeader>
                <AiOutlineArrowLeft onClick={() => navigate('/cart')} />
                Add a new address
            </CartHeader>
            <Container>
                <section>
                    <AddressForm addressFormValue={addressFormValue} />
                </section>
            </Container>
            <CartFooter>
                <button onClick={() => validForm()}> Continue to Checkout </button>
            </CartFooter>
        </> 
    );
}