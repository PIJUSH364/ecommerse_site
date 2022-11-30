import { Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
} from '../redux_toolkit/features/productSlice';

function Product({ data }) {
  const [toggleFlag, setToggleFlag] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cartProducts);

  const handleRemoveFromCart = (data) => {
    const filterItems = cartItems.filter((item) => item.id !== data.id);
    const existData = cartItems.find((item) => item.id === data.id);
    //  current item if exist cartItems then only removeFromCart
    if (data.id === existData?.id) {
      dispatch(removeFromCart(filterItems));
    }
  };
  const handleAddToCart = (data) => {
    const existData = cartItems.find((item) => item.id === data.id);
    // if current item already exist cartItems then no need to addToCart
    if (data.id !== existData?.id) {
      dispatch(addToCart(data));
    }
  };

  useEffect(() => {
    const existData = cartItems.find((item) => item.id === data.id);
    data.id === existData?.id ? setToggleFlag(true) : setToggleFlag(false);
  }, [cartItems]);
  return (
    <Stack width="100px">
      <h5>{data.id}</h5>
      <img
        src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
        alt={data.original_title}
      />
      {toggleFlag ? (
        <button onClick={() => handleRemoveFromCart(data)}>
          RemovefromCart
        </button>
      ) : (
        <button onClick={() => handleAddToCart(data)}>AddToCart</button>
      )}
    </Stack>
  );
}

export default Product;
