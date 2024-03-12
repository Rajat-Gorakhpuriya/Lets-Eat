import RestroratCard from "./RestroratCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [newRestList, setnewRestList] = useState([]);
    const [filteredRestorent, setFilterRestaurent] = useState([]);
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')}`);
        let json =  await(data.json());
        json = JSON.parse(json.contents);
        console.log(json);
        setnewRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    if (newRestList.length === 0) {
        // return <h1>Loading...</h1>
        return <Shimmer></Shimmer>
    }

    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button onClick={()=>{
                        // filter the restro card and update UI
                        console.log(searchText);
                        const filteredRestorent = newRestList.filter((res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterRestaurent(filteredRestorent);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={()=>{
                        const newList = newRestList.filter(res => res?.info?.avgRating > 4.2);
                        setFilterRestaurent(newList);
                    }}
                >Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestorent.map((restaurant) => (
                        <RestroratCard key={restaurant?.info?.id} restData={restaurant}></RestroratCard>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
