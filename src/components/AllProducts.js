import { Box, Stack } from '@mui/material';
import React from 'react';
import Product from './Product';
import { SearchBar } from './SearchBar';
function AllProducts({ data, loading }) {
  return (
    <>
      <Box m={3}>
        <SearchBar />
      </Box>

      <Stack
        direction="row"
        gap={2}
        justifyContent="space-around"
        flexWrap="wrap"
      >
        {loading ? (
          <h1>Loadding...</h1>
        ) : (
          data.map((product, key) => {
            return <Product key={key} data={product} />;
          })
        )}
      </Stack>
    </>
  );
}

export default AllProducts;
