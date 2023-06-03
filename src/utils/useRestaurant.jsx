import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState([]);

  // Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId + "&submitAction=ENTER");
    const json = await data.json();
    setRestaurant(json?.data?.cards);
  }

  // Return restaurant data
  return restaurant;
};

export default useRestaurant;
