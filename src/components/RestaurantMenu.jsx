import { useParams } from "react-router-dom";
import { IMG_MENU_URL, IMG_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  // when we click on a button, we dispatch an action, which call a reducer function, which modifies the slice in our Redux store
  // const handleAddItem = () => {
  //   dispatch(addItem("Graphes"));
  // };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="bg-[url(https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg)] text-white">
      {/* <div className="p- flex flex-row px-10 py-10">
        <img
          src={IMG_URL + restaurant[0]?.card?.card?.info?.cloudinaryImageId}
          alt=""
          className="rounded-lg h-[280px] object-contain cursor-pointer"
        />

        <div className="m-8">
          <h1 className="font-semibold text-4xl from-neutral-300">
            {restaurant[0]?.card?.card?.info?.name}
          </h1>
          <h3 className="text-md">
            INR {restaurant[0]?.card?.card?.info?.costForTwo / 100}
          </h3>
          <h3 className="">City: {restaurant[0]?.card?.card?.info?.city}</h3>
          <h3 className="text-md">
            Address: {restaurant[0]?.card?.card?.info?.labels[1]?.message}
          </h3>

          <button
            onClick={() => handleAddItem()}
            className="flex mt-5 px-2.5 py-2.5 border border-white rounded-xl hover:bg-rose-600 hover:border-rose-600"
            data-testid="addBtn"
          >
            Buy Now
          </button>
        </div>
      </div> */}

      <div className="flex flex-wrap pb-11 ">
        <h1 className="text-3xl text-center my-11 w-full">Menu</h1>
        <ul
          data-testid="menu"
          className="flex flex-wrap gap-y-14 justify-center p-0 sm:flex sm:item-center sm:justify-items-center sm:gap-x-6"
        >
          {restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (item) => (
              <li className="flex text-center justify-center items-center w-56 flex-col rounded-3xl cursor-pointer border p-2 hover:bg-slate-300 hover:text-[#232b30]">
                <img
                  src={IMG_MENU_URL + item?.card?.info?.imageId}
                  alt="Image-Item"
                  className="object-cover border-2 rounded-3xl h-[73%] w-full border-slate-300"
                />
                <span
                  className="text-md font-bold px-3 py-1"
                  key={item?.card?.info?.id}
                >
                  {item?.card?.info?.name}
                </span>
                <span
                  className="pb-3 font-medium transition-colors"
                  key={item?.card?.info?.price}
                >
                  Rs {item?.card?.info?.price / 100}
                </span>
                <button
                  onClick={() => addFoodItem(item.card.info)}
                  data-testid="addBtn" // Add the data-testid attribute here
                  className="mb-3 px-2.5 py-2.5 border border-rose-600 bg-rose-600 rounded-xl hover:bg-rose-600 hover:border-rose-600 hover:text-white"
                >
                  Add Item
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
