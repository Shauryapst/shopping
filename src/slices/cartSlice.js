import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    count: 0,
    cartlist: new Map([]),
  };

  export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addProduct: (state, action) => {
        state.count = state.count + 1;
  
        if (state.cartlist.has(action)) {
          state.cartlist.set(action.payload, state.count + 1);
        } else {
          state.cartlist.set(action.payload, 1);
        }
      },
      deleteProduct: (state, action) => {
        state.cartlist.set(action.payload, state.count - 1);
        if (state.cartlist.values(action.payload)) {
          state.cartlist.delete(action.payload);
        }
      },
    },
  });
  export const {addProduct, deleteProduct} = cartSlice.actions

  export default cartSlice.reducer;