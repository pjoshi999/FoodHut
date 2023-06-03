import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
 * Create Store
 *  - configureStore() - RTK (Redux Toolkit)
 *
 * Provide a store to app
 *  - <Provider store={store}> - import from  react-redux
 *
 * Slice
 *  RTK - configureStore({
 *    name: ""
 *    initialState:
 *    reducers: {
 *      addItem: (state, action) => { state = action.payload }   // payload is the data we are getting from the component (like click of button)
 *      removeItem: (state, action) => {}
 *    }
 *  })
 *
 *  export const {addItem, removeItem} = cartSlice.action;
 *  export default cartSlice.reducer;
 *
 * Put that Slice into out Redux Store (store.js)
 *  - {
 *       cart: cartSlice,
 *       user: userSlice    //if you have extra slice
 *    }
 *
 */
