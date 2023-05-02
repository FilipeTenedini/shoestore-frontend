import { useState } from "react";
import { SignUpContainer } from "./style";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function SignUpPage() {
    
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [waiting, setWaiting] = useState(false);
    const navigate = useNavigate();

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function signUp(event) {
        event.preventDefault();
        setWaiting(true);
        if (form.password === form.confirmPassword) {
            const body = { ...form };
            delete body.confirmPassword;

            axios
                .post(`${process.env.REACT_APP_API_URL}/signup`, body)
                .then((response) => {
                    setWaiting(false);
                    navigate("/signin");
                })
                .catch((err) => {
                    setWaiting(false);
                    alert(err.response.data);
                });
        } else {
            alert("Passwords do not match!");
        }
    }

    return (
        <SignUpContainer>
            <h1>Welcome to ShoeStore</h1>
            <span>Signup to your account</span>
            <form onSubmit={signUp}>
                <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                />
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
                <input
                    placeholder="Re-enter Password"
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
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
                        "Create Account"
                    )}
                </button>
            </form>
            <Link to="/signin">Have an account? <b>Sign in</b></Link>
        </SignUpContainer>
    );
}