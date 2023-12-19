import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "./Helpers/Axios.config";
import { AuthContext } from "./context/AuthContext";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const router = useNavigate();

  const { Login, state } = useContext(AuthContext);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const sendDataToBackend = async (event) => {
    event.preventDefault();

    if ( userData.email && userData.password) {
      if (userData.password.length >= 5) {
        try {
          const response = await api.post("/auth/login", { userData });

          if (response.data.success) {
            localStorage.setItem("my-token", JSON.stringify(response.data.token));
            Login(response.data.user);
            console.log(response.data)
            toast.success("Login successful");
            setUserData({ email: "", password: "" });
            router("/");
          } else {
            toast.error(response.data.message);
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

