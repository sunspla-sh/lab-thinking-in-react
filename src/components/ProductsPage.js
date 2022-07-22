import { useState } from 'react';

import initialProductsData from '../data.json';

import SearchBar from './SearchBar';
import ProductsTable from './ProductTable';

function ProductsPage(){

  const [products, setProducts] = useState(initialProductsData);

  const [filteredProducts, setFilteredProducts] = useState(initialProductsData);

  const [search, setSearch] = useState('');

  const [filterInStock, setFilterInStock] = useState(false);

  const updateSearchAndFilter = event => {

    let newFilteredProductsArray;

    //if checked - we only want in-stock products
    if(filterInStock){

      newFilteredProductsArray = products.filter(individualProduct => {
        return individualProduct.name.toLowerCase().includes(event.currentTarget.value.toLowerCase()) && individualProduct.inStock
      });

    } else { // all products are fine, as long as they match the text in the search bar
      newFilteredProductsArray = products.filter(individualProduct => {
        return individualProduct.name.toLowerCase().includes(event.currentTarget.value.toLowerCase())
      });
    }

    setFilteredProducts(newFilteredProductsArray);

    setSearch(event.currentTarget.value);

  }

  const updateFilterInStock = event => {

    let newFilteredProductsArray;

    //if checked - we only want in-stock products
    if(event.currentTarget.checked){

      newFilteredProductsArray = products.filter(individualProduct => {
        return individualProduct.name.toLowerCase().includes(search.toLowerCase()) && individualProduct.inStock
      });

    } else { // all products are fine, as long as they match the text in the search bar
      newFilteredProductsArray = products.filter(individualProduct => {
        return individualProduct.name.toLowerCase().includes(search.toLowerCase())
      });
    }

    setFilteredProducts(newFilteredProductsArray);
    setFilterInStock(event.currentTarget.checked);
    
    
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        search={search}
        updateSearchAndFilter={updateSearchAndFilter}
        filterInStock={filterInStock}
        updateFilterInStock={updateFilterInStock}
      />
      <ProductsTable products={filteredProducts} />
    </div>
  );

}

export default ProductsPage;