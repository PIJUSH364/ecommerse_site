import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import { useData } from './custom_hook/useData';
import { productStocked } from './redux_toolkit/features/productSlice';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
function App() {
  const allProducts = useData();
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product.allProducts);
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(productStocked(allProducts));
  }, [allProducts]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<AllProducts data={productsData} />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="product_details" element={<ProductDetails />}></Route>
        <Route path="*" element={<h2>Sorry</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
