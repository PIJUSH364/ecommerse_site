import { Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux_toolkit/features/productSlice';

import CartProduct from './CartProduct';

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cartProducts);

  const handleCheckOut = () => {
    dispatch(removeFromCart([]));
    alert('order placed succesfully');
  };

  console.log(totalPrice);
  return (
    <Stack direction="row">
      <Box flex={1}>
        <h2>Cart item render here...</h2>
        <div>
          {cartItems &&
            cartItems.map((item, key) => <CartProduct key={key} data={item} />)}
        </div>
      </Box>
      <Box flex={1} border="2px solid gray" m={1} maxHeight="200px">
        <h3>order summery</h3>
        {/* <h3>total items {cartItems.length}</h3> */}
        <h3>total price${totalPrice}</h3>
        <button
          onClick={handleCheckOut}
          style={{
            display: ` ${cartItems.length ? 'block' : 'none'}`,
          }}
        >
          Checkout
        </button>
      </Box>
    </Stack>
  );
}

export default Cart;
