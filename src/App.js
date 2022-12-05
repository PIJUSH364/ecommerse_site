import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import { useData } from './custom_hook/useData';
import { productStocked } from './redux_toolkit/features/productSlice';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import data from './data/data';

function App() {
  // api data fetching
  // const allProducts = useData(
  //   'https://api.themoviedb.org/3/movie/popular?api_key=b6d57f45c1ed674f27d2d36fd0ed479c&language=en-US&page=1'
  // );

  const allProducts = data.products;
  console.log(allProducts);
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product.allProducts);

  useEffect(() => {
    dispatch(productStocked(allProducts));
  }, [allProducts]);

  return (
    <div className="App">
      <NavBar />
      <img src="" alt="" />
      <Routes>
        <Route path="/" element={<AllProducts data={productsData} />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="product_details" element={<ProductDetails />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="sign_up" element={<SignUp />}></Route>
        <Route path="*" element={<h2>Sorry</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
