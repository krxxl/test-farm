import './index.scss';
import React from 'react';
import {observer} from "mobx-react-lite";
import Products from 'store/products';
import ProductsItem from "containers/App/Products/ProductList/ProductItem";

const ProductsList: React.FC = observer(() => {
  return (
    <div className="products__list">
      {Products.items?.map(item => {
        return (
          <ProductsItem  key={item.id} {...item}/>
        )
      })}
    </div>
  );
});

export default ProductsList;