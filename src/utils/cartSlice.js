import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

/**
 * cartSlice = {
 *    action: {
 *       addItem: (state, action){}
 *       removeItem: (state, action){}
 *       clearCart: (state, action){}
 *    }
 *    reducer: reducers
 * }
 *
 *
 * reducer is exported as default and actions as named export (action as named because they are in bunch means there might be a lot of actions like add, remove, clear, etc)
 */
