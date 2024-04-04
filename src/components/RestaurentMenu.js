import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurantMenu";
import RestorantCategory from "./RestorantCatagory";
import { useState } from "react";

const RestauroMenu = () => {
    const { resId } = useParams() || '74959';
    const response = useRestaurentMenu(resId);
    const restInfo = response.restInfo;
    const categories = response.categories;
    const [showIndex, setShowIndex] = useState();

    if (restInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = restInfo?.cards[2]?.card?.card?.info;
    return (
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category, index) => 
                (<RestorantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card} 
                    showItems = {index === showIndex} 
                    setShowIndex = {() => setShowIndex(index)}
                    >
                </RestorantCategory>)
            )}
        </div>
    );
    
} 

export default RestauroMenu;