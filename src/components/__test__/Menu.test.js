import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { MENU_DATA } from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add Items to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(() => body.getByTestId("menu")));
  await waitFor(() => expect(() => body.getAllByTestId("addBtn")));
  const addBtn = body.getAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);    // adding 1st item
  fireEvent.click(addBtn[1]);    // adding 2nd item
  fireEvent.click(addBtn[2]);    // adding 3rd item

  // Check if the cart in header component is updated or not
  const cartItems = body.getByTestId("cartItems");
  expect(cartItems.innerHTML).toBe("Cart - 3 items");

  // Check if the cart has 3 components or not.
  const cart = body.getByTestId("cart");
  expect(cart.children.length).toBe(3);
});
