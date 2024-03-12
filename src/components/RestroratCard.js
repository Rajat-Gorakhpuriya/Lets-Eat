import { CDN_URL } from "../utils/constants";

const RestroratCard = (prop) => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img alt="res-logo" style={{ height: '100px', width: '245px', padding: '2px' }} src={CDN_URL + prop.restData?.info?.cloudinaryImageId}/>
            <h3>{prop.restData?.info?.name}</h3>
            <h4>{prop.restData?.info?.cuisines[0]}</h4>
            <h4>{prop.restData?.info?.sla?.slaString}</h4>
            <h4>{prop.restData?.info?.avgRating} Max</h4>
        </div>
    )
}

export default RestroratCard;