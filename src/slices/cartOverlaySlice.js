import { createSlice } from '@reduxjs/toolkit';

export const cartOverlaySlice = createSlice({
  name: 'cartOverlay',
  initialState: {
    value: 0,
  },
  reducers: {
    toggleCart: (state) => {
        state.value = !state.value;
    }
  },
})

export const { toggleCart } = cartOverlaySlice.actions

export default cartOverlaySlice.reducer