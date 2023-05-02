import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { SignInContainer } from "./style";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function SignInPage() {

    const [form, setForm] = useState({ email: "", password: "" });
    const [waiting, setWaiting] = useState(false);
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function signIn(event) {
        event.preventDefault();
        setWaiting(true);

        axios
            .post(`${process.env.REACT_APP_API_URL}/signin`, form)
            .then((response) => {
                setWaiting(false);
                const data = response.data;
                setUserData(data)
                navigate("/");
            })
            .catch((err) => {
                setWaiting(false);
                alert(err.response.data);
            });
    }

    return (
        <SignInContainer>
            <h1>Welcome to ShoeStore</h1>
            <span>Login to your account</span>
            <form onSubmit={signIn}>
                <input
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                />
                <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                />
                <button>
                    {waiting ? (
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
                    ) : (
                        "Login"
                    )}
                </button>
            </form>
            <Link to="/signup">Dont have an account? <b>Sign up</b></Link>
            <Link to="/"><b>Continue without buying</b></Link>
        </SignInContainer>);
}