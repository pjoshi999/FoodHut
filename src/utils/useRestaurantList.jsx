import { useState, useEffect } from "react";
import { FETCH_RESTAURANTS_URL } from "../config";

const useRestaurantList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // useEffect
  // empty dependency array => executed after initial render
  // dependency array [searchText] => executes after initial render + re-renders everytime when searchText state is changed.

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANTS_URL);
    const json = await data.json();

    // Optional Chaining (?.)
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  //   return restaurant list
  return [
    allRestaurants,
    setAllRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  ];
};

export default useRestaurantList;
