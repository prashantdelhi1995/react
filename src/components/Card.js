
 import{cdnUrl} from "../util/constant"
 
 
 const Card=(props)=>{
    const styleResCard = {
        backgroundColor: "#D3D3D3"
    }

    const {resData} = props;
    console.log(resData)
    const {name, cloudinaryImageId, cuisines, avgRating, sla} = resData.info; // Optional Chaining
    return (
        <div className="res-card" style={styleResCard}>
            <img 
            className="res-card-image"
            src={cdnUrl + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>)
}
export default Card;