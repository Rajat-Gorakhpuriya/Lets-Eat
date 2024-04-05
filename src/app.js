import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestauroMenu from "./components/RestaurentMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    const [userInfo, setUserInfo] = useState();
    useEffect(() => {
        let data = {
            name: "RajtG"
        };
        setUserInfo(data.name);
    },[]);
    return (
        <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
            <div className="app">
                <Header></Header>
                <Outlet></Outlet>
                {/* <Body></Body> */}
            </div>
        </UserContext.Provider>
    )
};

const appRouter = createBrowserRouter(
    [   {
            path: "/",
            element:<AppLayout/>,
            children: [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <Suspense fallback={<Shimmer/>}><About /></Suspense>
                },
                {
                    path: "/contact",
                    element: <Contact />
                }, 
                {
                    path: "/grocery",
                    element: <Suspense fallback={<h1>Loading</h1>}><Grocery /></Suspense>
                },
                {
                    path: "/restaurent/:resId",
                    element:<RestauroMenu/>
                }
            ],
            errorElement:<Error/>
        }
    ]
);

const react = ReactDOM.createRoot(document.getElementById("root"));
// react.render(<AppLayout></AppLayout>)
react.render(<RouterProvider router={appRouter}/>);