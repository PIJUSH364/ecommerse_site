import { Rating, Stack } from '@mui/material';
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
      <img src={data.image} alt={data.name} />
      <h3>${data.price}</h3>
      <Rating
        name="half-rating-read"
        defaultValue={data.rating}
        precision={0.5}
        readOnly
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
