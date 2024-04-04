import { CDN_URL } from "../utils/constants";

const RestroratCard = (prop) => {
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + prop.restData?.info?.cloudinaryImageId}/>
            <h3 className="font-bold py-1 text-lg"
                title={prop.restData?.info?.name}>{prop.restData?.info?.name}</h3>
            <h4>{prop.restData?.info?.cuisines[0]}</h4>
            <h4>{prop.restData?.info?.sla?.slaString}</h4>
            <h4>{prop.restData?.info?.avgRating} Max</h4>
        </div>
    )
}

// we create a Higher order component which take this cmponent 
// and output will be a new enhanced component 'RestaurentCardPromoted'
export const withPromotedLabel = (RestroratCard) => {
    return (props) => { // returns a component 
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestroratCard {...props}/>
            </div>
        )
    }
}
export default RestroratCard;