import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurantMenu";

const RestauroMenu = () => {
    const { resId } = useParams() || '74959';
    const response = useRestaurentMenu(resId);
    const restInfo = response.restInfo;
    const itemCards = response.itemCards;
   
    if (restInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = restInfo?.cards[2]?.card?.card?.info;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p> <h3>{costForTwoMessage}</h3>
            <h3>Menu</h3>
            <ul>
                {itemCards?.map((item) => (
                    <li key={+item.card.info.id}>{item.card.info.name} - {item.card.info.price}</li>))
                }
            </ul>
        </div>
    );
    
} 

export default RestauroMenu;