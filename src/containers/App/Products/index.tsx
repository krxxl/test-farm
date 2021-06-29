import './index.scss';
import React from 'react';
import Template from "containers/App/Template";
import ProductsList from "containers/App/Products/ProductList";

const Product: React.FC = () => {

  return (
    <section className="products">
      <div className="products__wrapper">
        <Template>
          <h2 className="products__title title-h2">Товары:</h2>
          <ProductsList/>
        </Template>
      </div>
    </section>
  );
}

export default Product;