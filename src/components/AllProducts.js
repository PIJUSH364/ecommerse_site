import { Stack } from '@mui/material';
import React from 'react';
import Product from './Product';
function AllProducts({ data, loading }) {
  return (
    <Stack
      direction="row"
      gap={2}
      justifyContent="space-around"
      flexWrap="wrap"
    >
      {loading ? (
        <h1>Loadding...</h1>
      ) : (
        data.map((product, key, index) => {
          return <Product key={key} data={product} no={index} />;
        })
      )}
    </Stack>
  );
}

export default AllProducts;
