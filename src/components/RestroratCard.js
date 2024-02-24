import { REST_CARD_IMG_URL } from "../utils/constants";

const RestroratCard = (prop) => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img alt="res-logo" style={{ height: '100px', width: '245px', padding: '2px' }} src={REST_CARD_IMG_URL}/>
            <h3>{prop.restData.resName}</h3>
            <h4>{prop.restData.cuisine}</h4>
            <h4>{prop.restData.time}</h4>
            <h4>{prop.restData.rating} Max</h4>
        </div>
    )
}

export default RestroratCard;