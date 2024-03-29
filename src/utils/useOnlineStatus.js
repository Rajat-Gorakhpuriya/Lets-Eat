import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [userStatus,setUserStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setUserStatus(false);
        })
        window.addEventListener("online", () => {
            setUserStatus(true);
        })
    }, []);
    return userStatus;
}

export default useOnlineStatus;