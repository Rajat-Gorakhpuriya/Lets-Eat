import RestroratCard from "./RestroratCard";
import REST_LIST from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    let [newRestList, setnewRestList] = useState(REST_LIST);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json =  await data.json();
        console.log(json);
        // setnewRestList(json.)
    }
    
    if (newRestList.length === 0) {
        // return <h1>Loading...</h1>
        return <Shimmer></Shimmer>
    }

    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button className="filter-btn"
                    onClick={()=>{
                       const newList = newRestList.filter(res => res.rating > 4);
                        setnewRestList(newList);
                    }}
                >Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    newRestList.map((restaurant) => (
                        <RestroratCard key={restaurant.id} restData={restaurant}></RestroratCard>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
