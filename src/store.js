import { configureStore } from '@reduxjs/toolkit'
import cartOverlayReducer from './slices/cartOverlaySlice';
import cartReducer from './slices/cartSlice';


const reducer = {
  cart: cartReducer,
  cartToggle : cartOverlayReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;