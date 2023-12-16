import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "./Helpers/Axios.config";
import { AuthContext } from "./context/AuthContext";

function Login() {
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });

  const router = useNavigate();

  const { login, state } = useContext(AuthContext);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const sendDataToBackend = async (event) => {
    event.preventDefault();

    if (userData.name && userData.email && userData.password) {
      if (userData.password.length >= 5) {
        try {
          const response = await api.post("/auth/login", { userData });

          if (response.data.success) {
            localStorage.setItem("my-token", JSON.stringify(response.data.token));
            login(response.data.user);
            toast.success("Login successful");
            setUserData({ name: "", email: "", password: "" });
            router("/");
          } else {
            toast.error(response.data.message || "Login Failed");
          }
        } catch (error) {
          console.error("Error during login:", error);
          toast.error("Login Failed");
        }
      } else {
        toast.error("Password must be at least 5 digits");
      }
    } else {
      toast.error("All fields are mandatory");
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
        <input className="button" type="submit" value="login" />
      </form>
    </div>
  );
}

export default Login;

