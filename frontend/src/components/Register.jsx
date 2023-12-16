import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "./Helpers/Axios.config";

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const sendDataToBackend = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post("/auth/register", { userData });

            if (response.data.success) {
                toast.success("Registration successful");
                setUserData({ name: "", email: "", password: "" });
                router("/login");
            } else {
                toast.error(response.data.message || "Registration Failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            toast.error("Registration Failed");
        }
    };

    return (
        <div>
            <form action="" onSubmit={sendDataToBackend}>
                <label htmlFor="name">Name:</label>
                <input className="inputs" type="text" name="name" onChange={handleChange} value={userData.name} />
                <label htmlFor="email">Email:</label>
                <input className="inputs" type="email" name="email" onChange={handleChange} value={userData.email} />
                <label htmlFor="password">Password:</label>
                <input className="inputs" type="password" name="password" onChange={handleChange} value={userData.password} />
                <br />
                <input className="button" type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;

