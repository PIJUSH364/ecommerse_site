import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { shownProductDetails } from '../redux_toolkit/features/productSlice';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [searhData, setSearhData] = useState([]);
  const allProducts = useSelector((state) => state.product.allProducts);

  const shownProductDeatils = (item) => {
    dispatch(shownProductDetails(item));
  };
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setValue(searchWord);
    const newFilterData = allProducts.filter((e) => {
      return e.original_title.toLowerCase().includes(searchWord.toLowerCase());
    });
    // searchingword if empty then then nothig to shown otherwise shown
    searchWord === '' ? setSearhData([]) : setSearhData(newFilterData);
  };
  useEffect(() => {}, [searhData]);
  return (
    <div>
      <input
        type="text"
        placeholder="search your items..."
        value={value}
        onChange={(e) => handleFilter(e)}
      />
      <button>
        {value.length ? (
          <CloseIcon onClick={() => setValue('')} />
        ) : (
          <SearchIcon />
        )}
      </button>
      {searhData
        ? searhData.slice(0, 3).map((item, key) => {
            return (
              <Link
                to="product_details"
                key={key}
                onClick={() => shownProductDeatils(item)}
              >
                <h3>{item.original_title}</h3>
              </Link>
            );
          })
        : null}
    </div>
  );
};
