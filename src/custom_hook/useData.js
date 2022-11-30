import { useEffect, useState } from 'react';
import axios from 'axios';
export const useData = () => {
  const [products, setAllProducts] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b6d57f45c1ed674f27d2d36fd0ed479c&language=en-US&page=1`
      )
      .then(function (response) {
        setAllProducts(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return products;
};
