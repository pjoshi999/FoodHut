import { useContext } from "react";
import { IMG_URL } from "../config";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  slaString,
  cuisines,
  avgRating,
  address,
  costForTwoString,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col w-[300px] pb-5 rounded-lg bg-gray-100 shadow-xl sm:justify-items-stretch">
      <div className="flex flex-col border border-solid p-4 rounded-xl">
        <img
          alt="food-image"
          src={IMG_URL + cloudinaryImageId}
          className="rounded-lg"
        />
        <h3 className="text-lg font-bold text-center gap-y-0 mt-4">{name}</h3>
        <ul className="flex items-center justify-evenly">
          <li
            className="text-white px-1 w-12 text-center text-sm font-medium"
            style={
              avgRating >= 4
                ? { backgroundColor: "green" }
                : { backgroundColor: "#db7c38" }
            }
          >
            {avgRating}{" "}
            <i className="fa fa-star" style={{ color: "#ffffff" }}></i>
          </li>
          <span className="px-1">•</span>
          <li className="">{slaString.toLowerCase()}</li>
          <span className="px-1">•</span>
          <li className="text-sm">{costForTwoString}</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantCard;
