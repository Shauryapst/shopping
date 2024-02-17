import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  cartItems: {}, // Object to store cart items by id
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload.data;
      const id = item.id;
      console.log(id);

      const existingItem = state.cartItems[id];
      const count = existingItem ? existingItem.count + 1 : 1;
      state.count += 1;
      state.cartItems[id] = { ...item, count }; // Store object along with count
      state.totalPrice += item.price;
    },
    removeFromCart: (state, action) => {
      const item = action.payload.data;
      const {id, price} = item;
      const existingItem = state.cartItems[id];
      if (!existingItem) return;
      const count = Math.max(existingItem.count - 1, 0);
      if (count === 0) {
        delete state.cartItems[id];
      } else {
        state.cartItems[id].count = count;
      }
      state.count -= 1;
      state.totalPrice = Math.max(state.totalPrice - price, 0);
    },
    clearCart: (state) => {
      state.count = 0;
      state.cartItems = {};
      state.totalPrice = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
