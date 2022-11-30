import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux_toolkit/features/productSlice';

function CartProduct({ data }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cartProducts);

  const handleRemoveFromCart = (data) => {
    const filterItems = cartItems.filter((item) => item.id !== data.id);
    dispatch(removeFromCart(filterItems));
  };

  return (
    <Stack width="100px">
      <h5>{data.id}</h5>
      <img
        src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
        alt={data.original_title}
      />
      <button onClick={() => handleRemoveFromCart(data)}>RemovefromCart</button>
    </Stack>
  );
}

export default CartProduct;
