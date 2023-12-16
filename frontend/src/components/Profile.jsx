import { useNavigate } from "react-router-dom";


function Profile(){
    const goTo = useNavigate();
    function toHomepage(){
        goTo("/")
    }
    return(
        <div>
           <h1> This is my profile page</h1>
           <button className="button" onClick={toHomepage}>Homepage</button>

        </div>
    )
}

export default Profile