import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const checkout = () => toast("Thank you for ordering!");

  let totalPrice = 0;
  return (
    <div>
      <div className="flex justify-around m-5 items-center">
        <h1>Cart Items - {cartItems.length}</h1>
        <button
          className="bg-rose-700 text-white p-3 rounded-xl"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>

      <div data-testid="cart" className="gap-x-20 my-10">
        {cartItems.map((item) => {
          totalPrice += item.price;
          return (
            <>
              <hr />
              <FoodItems key={item.id} {...item} />
            </>
          );
        })}
      </div>

      <div className="flex justify-between px-[35rem] pb-10">
        <span className="font-normal text-xl text-center">TO PAY:</span>
        <span className="font-bold text-2xl text-center">
          ₹{totalPrice / 100}
        </span>
      </div>

      <div className="flex justify-center px-[35rem] pb-10">
        <button
          className="border-2 bg-green-400 border-green-600 py-2 px-5 rounded-xl"
          onClick={checkout}
        >
          Checkout
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cart;
