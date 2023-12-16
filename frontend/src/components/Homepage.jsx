import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import InvoiceCalculator from "./Invoicecalculator";
import InvoiceForm from "./InvoiceForm";

function Homepage() {
    const locate = useNavigate();

    function navigate() {
        locate("/Login");
    }

    function toProfile() {
        locate("/Profile");
    }

    function counter() {
        locate("/Counter");
    }

    function Effect1() {
        locate("/Effect1");
    }

    function Effect2() {
        locate("/Effect2");
    }

    function Effect3() {
        locate("/Effect3");
    }

    function Effect4() {
        locate("/Effect4");
    }

    function regPage() {
        locate("/register");
    }

    function goToInvoiceCalculator() {
        locate("/InvoiceCalculator");
    }

    // const { state, dispatch } = useContext(MyContext)

    const { state, Logout } = useContext(AuthContext);

    return (
        <div>
            <h1>Homepage for Awdiz</h1>
            <h2>User: {state?.user?.name}</h2>
            <button className="button" onClick={regPage}>Register</button>
            <button className="button" onClick={navigate}>LoginPage</button>
            <button className="button" onClick={toProfile}>Profile</button>
            <button className="button" onClick={counter}>Counter</button><br />
            <button className="button" onClick={Effect1}>Effect1</button>
            <button className="button" onClick={Effect2}>Effect2</button>
            <button className="button" onClick={Effect3}>Effect3</button>
            <button className="button" onClick={Effect4}>Effect4</button>
            <button className="button" onClick={goToInvoiceCalculator}>InvoiceCalculator</button>

            {/* <button className="button-2 logout" onClick={Logout}>Logout</button> */}
            <button className="button-2" onClick={() => { toast.success("yeahhh") }}>Toast yeahh</button>
            <button className="button-2" onClick={() => { toast.error("Nahhh") }}>Toast Nahhh</button>
        </div>
    );
}

export default Homepage;
