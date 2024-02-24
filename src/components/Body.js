import RestroratCard from "./RestroratCard";
import REST_LIST from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    REST_LIST.map((restaurant) => (
                        <RestroratCard key={restaurant.id} restData={restaurant}></RestroratCard>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
