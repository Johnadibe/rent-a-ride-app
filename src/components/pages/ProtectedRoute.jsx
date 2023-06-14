import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
        !!localStorage.getItem('tourx-token') ? setIsLoggedIn(true) : navigate('/login');
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (
        <>
            {
                isLoggedIn ? props.children : <Login/>
            }
        </>
    );
}
export default ProtectedRoute;