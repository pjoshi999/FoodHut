import { useState, useContext } from "react";
import logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <img
      data-testid="logo"
      src={logo}
      alt="logo"
      className="h-[4.5rem] object-cover"
    />
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items); // reducer (in store.js)  =>  initialState (in slice)

  return (
    <div className="flex justify-between bg-[#09101a] text-neutral-100 px-8">
      <Title />

      <ul className="flex justify-center items-center text-lg">
        <li className="px-6 hover:underline underline-offset-4 decoration-solid">
          <Link to="/">Home</Link>
        </li>
        <li className="px-6 hover:underline underline-offset-4 decoration-solid">
          <Link to="/about">About</Link>
        </li>
        <li className="px-6 hover:underline underline-offset-4 decoration-solid">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-6 hover:underline underline-offset-4 decoration-solid">
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>

      <div className="flex items-center px-6 no-underline">
        <Link to="/cart" data-testid="cartItems" className="no-underline">
          <i
            className="fa fa-shopping-cart"
            style={{ color: "#ffffff", fontSize: "25px" }}
          ></i>
          <sup className="font-bold text-[#F65F5F] text-lg ">
            {cartItems.length}
          </sup>
        </Link>
      </div>

      {/* {user.name} */}

      {/* <h1 data-testid="online-status" className="flex items-center">
        {isOnline ? "🟢Online" : "🔴Offline"}
      </h1>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
    </div>
  );
};

export default Header;
