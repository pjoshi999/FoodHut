import { RestaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [
    allRestaurants,
    setAllRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  ] = useRestaurantList([]);

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div className="h-full flex justify-center text-xl font-semibold">
        <h1 >
          It seems that your Internet connection is not stable.🍁
        </h1>
        ;
      </div>
    );
  }

  // const { user, setUser } = useContext(UserContext);

  // Conditional Rendering
  return !filteredRestaurants || filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-[url(https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg)]">
      <div className="bg-gradient-to-r from-[#0a0f1d] to-[#0b101d] shadow-xl flex justify-center items-center h-16">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          data-testid="search-input"
          className="h-10 border-2 border-solid border-zinc-400 rounded-lg p-3"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="rounded-lg border-2 border-slate-950 h-10 mx-2 w-auto px-4 bg-[#F65F5F] text-black font-medium hover:bg-[#ed4e4e]"
          data-testid="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        {/* <input
          type="text"
          value={user.name}
          className="mr-4"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />

        <input
          type="text"
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        /> */}
      </div>

      <div
        data-testid="res-list"
        className="flex flex-wrap items-center gap-y-14 justify-around p-5 sm:flex sm:item-center sm:justify-items-center sm:gap-x-6 pb-14"
      >
        {filteredRestaurants.map((restaurant) => {
          console.log(restaurant.data);
          return (
            <div className="relative">
              <div className="flex flex-col transition-transform ease-linear hover:scale-110">
                <RestaurantCard
                  className=""
                  key={restaurant.data.id}
                  {...restaurant.data}
                />
                <Link
                  to={"/restaurants/" + restaurant.data.id}
                  className="flex justify-center relative top-[-20px]"
                >
                  <span className="bg-[#F65F5F] hover:bg-[#ed4e4e] px-4 py-2 relative rounded-3xl font-medium">
                    Quick View
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
