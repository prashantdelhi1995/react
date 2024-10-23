import Cart from "./Cart";
import restaurantsList from "../util/data"
import {useEffect, useState}  from "react"
const Body = () => {
  const [listOfRes, setListOfRes] = useState(restaurantsList)

    const getTopRatedRes = () => {
        const filteredList = listOfRes.filter((res) => res.info.avgRating > 4);
        setListOfRes(filteredList);
    }
  return (
    <div className="body">
      <button className="filter" onClick={getTopRatedRes} >Top Rated Restaurants</button>
      <div className="cart-body">
      {
                    listOfRes.map((restaurant) => (<Cart key={restaurant.info.id} resData = {restaurant} />))
                }
     
      </div>
    </div>
  );
};
export default Body;
