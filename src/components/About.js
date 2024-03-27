import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <h1> About </h1>
                <UserClass name={'Rajat (class)'} location={"Bharat"} />
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1> About </h1>
//             {/* <User name={'Rajat (functional)'}/> */}
//             <UserClass name={'Rajat (class)'} location={"Bharat"}/>
//         </div>
//     )
// }
export default About;