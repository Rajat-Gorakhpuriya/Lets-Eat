import { Link } from "react-router-dom";
import { HEADER_LOGO_IMG_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const dataFromContext = useContext(UserContext);
    useEffect(() => {
    }, [btnNameReact]);

    return (
        <div className="flex justify-between  sm:bg-yellow-200 lg:bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-56 h-[120px]" src={HEADER_LOGO_IMG_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-3">Online Status : {onlineStatus ? "ONLINE" : "OFFLINE"}</li>
                    <li className="px-3"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about">About Us</Link></li>
                    <li className="px-3"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-3"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-3">Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
                     }}>{btnNameReact}</button>
                    <li className="px-3 font-bold">{dataFromContext?.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;