import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, count } = action.payload;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.count = count;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    emptyCart: (state) => {
      state.items = [];
      console.log("action worked");
    },
  },
});
export default storeSlice.reducer;
export const { addToCart, deleteItem, emptyCart } = storeSlice.actions;
