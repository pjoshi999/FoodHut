import React from "react";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_MENU_URL } from "../config";
import veg from "../assets/img/veg.png";
import nonVeg from "../assets/img/non-veg.png";

const RestaurantMenu2 = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="px-72">
      {restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
        (category) => (
          <div className="py-5">
            <h1 className="text-xl font-medium">
              {category?.card?.card?.title
                ? category?.card?.card?.title + " ("
                : ""}
              {category?.card?.card?.itemCards?.length
                ? category?.card?.card?.itemCards?.length + ")"
                : ""}
            </h1>
            <div className="">
              {category?.card?.card?.itemCards?.map((item) => (
                <>
                  <hr />
                  <div className="p-7">
                    <div className="flex justify-between">
                      <div>
                        {item?.card?.info?.itemAttribute?.vegClassifier ===
                        "VEG" ? (
                          <img src={veg} alt="" className="h-5" />
                        ) : (
                          <img src={nonVeg} alt="" className="h-5" />
                        )}
                        <h1 className="text-xl font-semibold">
                          {item?.card?.info?.name}
                        </h1>
                        <span className="line-through pr-2 text-xs">
                          ₹{item?.card?.info?.price / 100}
                        </span>
                        <span className="text-base font-medium">
                          {item?.card?.info?.finalPrice
                            ? "₹" + item?.card?.info?.finalPrice / 100
                            : "₹" + item?.card?.info?.price / 100}
                        </span>
                        <p className="text-[#282c3f73] text-sm pt-3">
                          {item?.card?.info?.description}
                        </p>
                      </div>
                      <div className="min-w-[170px] h-[126px] ml-5 object-cover rounded-md">
                        <button className="">
                          <img
                            src={IMG_MENU_URL + item?.card?.info?.imageId}
                            alt=""
                            className="w-[170px] h-[126px] object-cover rounded-md"
                          />
                          <button
                            className="px-6 py-1 top-[-1rem] relative border-2 bg-white rounded-lg outline outline-green-700 border-green-500 text-sm font-medium text-green-950 hover:scale-110"
                            onClick={() => addFoodItem(item?.card?.info)}
                          >
                            ADD
                          </button>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default RestaurantMenu2;
