import { IMG_MENU_URL } from "../config";

const FoodItems = ({ name, description, imageId, price }) => {
  return (
    <div className="flex justify-between items-center flex-row rounded-3xl cursor-pointer p-2 px-80 hover:bg-slate-100 hover:text-[#232b30]">
      <div className="flex flex-col">
        <span className="text-md font-bold">{name}</span>
        <p className="text-[#282c3f73] text-sm py-3">{description}</p>
        <span className="font-medium transition-colors">₹{price / 100}</span>
      </div>
      <div className="min-w-[200px] h-[126px] ml-5 object-cover rounded-md">
        <img
          src={IMG_MENU_URL + imageId}
          alt="Image-Item"
          className="w-[200px] h-[126px] object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default FoodItems;
