import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

function ProductDetails() {
  const productInfo = useSelector((state) => state.product.productDetails);
  return (
    <>
      {productInfo ? (
        <div>
          <h3>{productInfo.original_title}</h3>
          <Product data={productInfo} />
        </div>
      ) : (
        <h2>sorry we cant't find any search item</h2>
      )}
    </>
  );
}

export default ProductDetails;
