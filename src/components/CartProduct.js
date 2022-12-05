import { Rating, Stack } from '@mui/material';
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
      <img src={data.image} alt={data.name} />
      <h3>${data.price}</h3>
      <Rating
        name="half-rating-read"
        defaultValue={data.rating}
        precision={0.5}
        readOnly
      />
      <button onClick={() => handleRemoveFromCart(data)}>RemovefromCart</button>
    </Stack>
  );
}

export default CartProduct;
