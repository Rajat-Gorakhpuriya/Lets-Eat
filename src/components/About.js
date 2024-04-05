import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
                <div>
                    Logged In User - 
                    <UserContext.Consumer>
                        {
                            ({ loggedInUser }) => <h1>{loggedInUser}</h1>
                        }
                    </UserContext.Consumer>
                </div>
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