import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [],
  cartProducts: [],
  loading: true,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productStocked: (state, action) => {
      if (action.payload) {
        state.loading = false;
        state.allProducts = [...action.payload];
      } else {
        state.loading = true;
      }
    },
    addToCart: (state, action) => {
      if (action.payload) {
        state.cartProducts = [...state.cartProducts, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      if (action.payload) {
        state.cartProducts = [...action.payload];
      }
    },
  },
});

export default productSlice.reducer;
export const { addToCart, productStocked, removeFromCart } =
  productSlice.actions;