import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestauroMenu from "./components/RestaurentMenu";



const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Outlet></Outlet>
            {/* <Body></Body> */}
        </div>
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
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
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