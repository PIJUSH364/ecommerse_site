import { Box, Button, Stack } from '@mui/material';
import { useSelector } from 'react-redux';

import CartProduct from './CartProduct';

function Cart() {
  const cartItems = useSelector((state) => state.product.cartProducts);

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
        <h3>total items {cartItems.length}</h3>
        <h3>total price$</h3>
        <button
          onClick={() => alert('order Placed succesfully')}
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
