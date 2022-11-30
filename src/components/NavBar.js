import React from 'react';
import Badge from '@mui/material/Badge';

import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
function NavBar() {
  const cartItems = useSelector((state) => state.product.cartProducts);
  return (
    <Box m={3}>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="cart">
        <Badge color="secondary" badgeContent={cartItems.length} max={15}>
          <ShoppingBagIcon />
        </Badge>
      </Link>
    </Box>
  );
}

export default NavBar;
