import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // Check if Shimmer is present or not by check the length of the shimmer component
  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(10);
});

test("Restaurants should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // Check if the RestaurantList is updated with the items or not by check the length of the RestaurantList length
  // Wait for the Shimmer component to be loaded, so that RestaurantList will be loaded after.
  await waitFor(() => expect(body.getByTestId("res-list")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
});

test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // Wait for the Shimmer component to be loaded so that Search Button can be loaded after
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const searchInput = body.getByTestId("search-input");

  // Changing the value of input from "" to "food". (When we fetch input value, then we used to do e.target.value, So here we set the value accordingly)
  // It is a eventListener of jsdom
  fireEvent.change(searchInput, {
    target: {
      value: "food",
    },
  });

  // Click on the Search Button
  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  // Check if the after search result is correct or not.  (first check it manually by writing input in input box and search and then note the length of the items and check if RestaurantList has the same length or not)
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(2); // swiggy api might have been updated, and returned value might be different

  // console.log(resList);
});
