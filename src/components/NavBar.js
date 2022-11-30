import React from 'react';
import Badge from '@mui/material/Badge';

import { Link } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
function NavBar() {
  const cartItems = useSelector((state) => state.product.cartProducts);
  return (
    <Stack m={3} direction="row" justifyContent="space-evenly">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="cart">
        <Badge color="secondary" badgeContent={cartItems.length} max={15}>
          <ShoppingBagIcon />
        </Badge>
      </Link>
      <Link to="login">
        <h3>Login</h3>
      </Link>
      <Link to="sign_up">
        <h3>SignUp</h3>
      </Link>
    </Stack>
  );
}

export default NavBar;
