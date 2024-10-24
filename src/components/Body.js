import Card from "./Card";
import restaurantsList from "../util/data";
import { useEffect, useState } from "react";
import { apiUrl } from "../util/constant";
import Shimmer from "./shimmer";
const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [listOfFilteredRes, setListOfFilteredRes] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  const getTopRatedRes = () => {
    const filteredList = listOfRes.filter((res) => res.info.avgRating > 4);
    setListOfRes(filteredList);
  };
  const filterBySearchValue = () => {
    const filteredRes = listOfRes.filter((res) => (res.info.name.toLowerCase()).includes(searchVal.toLowerCase()));
    setListOfFilteredRes(filteredRes);
}
  const fetchRestaurants = async () => {
    const data = await fetch(apiUrl);
    const json = await data.json();
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  

  useEffect(() => {
    fetchRestaurants();
  }, []);

   
   return  listOfRes.length === 0 ? <Shimmer/> : (
      <div className="body">
          <div className='filter-search'>
              <div className='search'>
                  <input 
                      type='text' 
                      className='search-box' 
                      placeholder='Search' 
                      value={searchVal}
                      onChange={(e) => {console.log(e.target.value);setSearchVal(e.target.value)}}
                  />
                  <button onClick={() => {filterBySearchValue()}}>Search</button>
              </div>
              <button 
                  className="filter"
                  onClick={() => {getTopRatedRes()}}
              >
                  Top Rated Restaurants
              </button>
          </div>
          <div className="res-container">
              
                {console.log(listOfFilteredRes)}
                  {listOfFilteredRes.map((restaurant) => (<Card key={restaurant.info.id} resData = {restaurant} />))
              }
          </div>
      </div>)
};
export default Body;
