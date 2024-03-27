import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";



const RestauroMenu = () => {
    const [restInfo, setRestInfo] = useState(null);
    const [itemCards, setitemCards] = useState(null);
    const { resId } = useParams() || '74959';
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(MENU_API + resId)}`);
        let json = await (data.json());
        json = JSON.parse(json.contents);
        setRestInfo(json.data);
        setitemCards(json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        // console.log(json.data);       
    }
    if (restInfo === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info;
    console.log(itemCards);
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