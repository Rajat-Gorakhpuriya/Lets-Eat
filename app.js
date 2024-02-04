import React from "react";
import ReactDOM from "react-dom";

const Heading =()=>{
    return (<h1>Lets Eat</h1>)
}

const react = ReactDOM.createRoot(document.getElementById("root"));
react.render(<Heading></Heading>)