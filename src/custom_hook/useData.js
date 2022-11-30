import { useEffect, useState } from 'react';
import axios from 'axios';
export const useData = (resoureUrl) => {
  const [products, setAllProducts] = useState(null);
  useEffect(() => {
    axios
      .get(resoureUrl)
      .then(function (response) {
        setAllProducts(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return products;
};
