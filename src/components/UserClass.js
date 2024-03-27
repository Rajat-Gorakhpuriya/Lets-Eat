import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Test user",
                location: "Default",
                avatar_url: "default"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Rajat-Gorakhpuriya");
        const json = await data.json()
        this.setState({
            userInfo:{
                name: json?.name,
                location: json?.location || "Indore",
                avatar_url: json?.avatar_url
            }
        })
    }

    componentDidUpdate() {
        console.log("child comonent did update method")
    }

    componentWillUnmount() {
        console.log("child component will unmount")
    }
    render() {
        const {userInfo } = this.state;

        return (
            <div className="user-card">
                <img src={userInfo.avatar_url}></img>
                <h2>Name : {userInfo.name}</h2>
                <h3>Location : {userInfo.location}</h3>
                <h3>Contact : 7869087020</h3>
            </div>
        )
    }
}
export default UserClass;