import RestroratCard, {withPromotedLabel} from "./RestroratCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [newRestList, setnewRestList] = useState([]);
    const [filteredRestorent, setFilterRestaurent] = useState([]);
    const [searchText, setSearchText] = useState("")
    const RestaurentCardPromoted = withPromotedLabel(RestroratCard);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')}`);
        let json =  await(data.json());
        json = JSON.parse(json.contents);
        setnewRestList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    const { loggedInUser, setUserInfo } = useContext(UserContext);


    if(onlineStatus === false) {
        return (
            <h1> Your Are Offline</h1>
        );
    }
    
    if (newRestList?.length === 0) {
        // return <h1>Loading...</h1>
        return <Shimmer></Shimmer>
    }

    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <div className="search m-4 p-4 flex items-center">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="px-4 py-2 bg-green-200 m-4 rounded-lg"
                     onClick={()=>{
                        // filter the restro card and update UI
                        const filteredRestorent = newRestList.filter((res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterRestaurent(filteredRestorent);
                    }}
                    >Search</button>
                    <button className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const newList = newRestList.filter(res => res?.info?.avgRating > 4.2);
                            setFilterRestaurent(newList);
                        }}
                    >Top Rated Restaurants</button>
                    <div className="m-4 p-4 flex">
                        <labe>User Name : </labe>
                        <input
                            type="text" 
                            className="border-black p-2" 
                            value={loggedInUser}
                            onChange={(e) => setUserInfo(e.target.value)}
                        ></input>
                    </div>                    
                </div>                                
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestorent?.map((restaurant) => (
                        <Link to={"/restaurent/"+ restaurant?.info?.id}>
                            {restaurant.info?.isOpen 
                            ? (<RestaurentCardPromoted key={restaurant?.info?.id} restData={restaurant} />) 
                            : (<RestroratCard key={restaurant?.info?.id} restData={restaurant}/>)}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
