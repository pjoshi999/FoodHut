import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendereing header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if logo is loaded
  const logo = header.getByTestId("logo");
  expect(logo.src).toBe("http://localhost/dummy.png");
});

test("Online Status should be 🟢Online on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if the status is Online or Offline
  const onlineStatus = header.getByTestId("online-status");
  // console.log(onlineStatus);
  expect(onlineStatus.innerHTML).toBe("🟢Online");
});

test("Cart items should be 0 on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if the cart items are 0 or not
  const cartItems = header.getByTestId("cartItems");
  // console.log(cartItems);
  expect(cartItems.innerHTML).toBe("Cart - 0 items");
});
