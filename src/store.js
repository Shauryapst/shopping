import { configureStore } from '@reduxjs/toolkit'
// import tutorialReducer from './slices/tutorials';
import cartReducer from './slices/cartSlice';


const reducer = {
  cart: cartReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;