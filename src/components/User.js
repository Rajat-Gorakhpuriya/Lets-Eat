import { useState } from "react";
const User = ({name}) => {
    const [count] = useState(0);
    return (
        <div className="user-card">
            {/* <h2>Name : {props.name}</h2> */}
            <h2>Count : {count}</h2>
            <h2>Name : {name}</h2>
            <h3>Location : India</h3>
            <h3>Contact : 7869087020</h3>
        </div>
    )
}
export default User;