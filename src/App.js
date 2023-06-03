import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginPage from "./components/LoginPage";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import "font-awesome/css/font-awesome.min.css";
import RestaurantMenu2 from "./components/RestaurantMenu2";

// Below are all same/synonyms:
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

// TO DO LAZY LOADING
const Faq = lazy(() => import("./components/Faq"));
const About = lazy(() => import("./components/About"));
const Cart = lazy(() => import("./components/Cart"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  const [user, setUser] = useState({
    name: "Priyanshu Joshi",
    email: "joshi.priyanshu999@gmail.com",
  });

  return (
    // we are providing our Redux store to whole Application, that is why we wrapped all components with <Provider>. If we want to use Redux store in our application we have to provide it to react, this is done by <Provider>. It comes from "react-redux" library. That is why "react-redux" is known as Bridge between React and Redux store
    <Provider store={store}>
      {/* we are passing store.js to store props. Here we cannot change name the props */}
      <UserContext.Provider // we are providing UserContext to whole app as we have provided default values to both Header and Outlet(Body here). We have to use Provider wherever we want to pass default values of useContext() hooks). If we want to use userContext, we have to use Provider.
        value={{
          user: user, //user in UserContext: user in from App
          setUser: setUser,
        }}
      >
        <div className="relative min-h-full">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: (
              <Suspense fallback={<Shimmer />}>
                <ProfileClass />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu2 />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/faq",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Faq />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
