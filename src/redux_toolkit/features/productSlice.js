import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [],
  cartProducts: [],
  productDetails: null,
  totalPrice: 0,
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
    shownProductDetails: (state, action) => {
      if (action.payload) {
        state.productDetails = action.payload;
      }
    },
  },
});

export default productSlice.reducer;
export const {
  addToCart,
  productStocked,
  removeFromCart,
  shownProductDetails,
} = productSlice.actions;
