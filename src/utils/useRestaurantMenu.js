import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";


const useRestaurentMenu = (resId) => {
    const [restInfo,setRestInfo] = useState(null);
    const [itemCards, setItemCards] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(MENU_API + resId)}`);
        let json = await (data.json());
        json = JSON.parse(json.contents); 
        setRestInfo(json.data);
        setItemCards(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setCategories(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'));
   
    }
    return {
        "restInfo": restInfo,
        "itemCards": itemCards,
        "categories": categories
    }
}


export default useRestaurentMenu;
