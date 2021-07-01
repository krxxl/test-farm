import './index.scss';

import React, {useCallback, useEffect} from 'react';

import {observer} from "mobx-react-lite";
import {Cart, Products} from "store";

import Template from "containers/App/Template";
import ProductsItem from "containers/App/Products/ProductItem";

import {IProductItem} from "interfaces";


const Product: React.FC = observer(() => {

  const {addToCart, removeFromCart, addQuantity} = Cart;
  const {setIsAdded, getProducts, items} = Products;

  const onAddClick = useCallback((item: IProductItem) => {
    addToCart({...item, quantity: 1});
    setIsAdded(item.id);
  }, [addToCart, setIsAdded]);

  const onRemoveClick = useCallback((id: number) => {
    removeFromCart(id);
    setIsAdded(id);
  }, [removeFromCart, setIsAdded]);

  const onHandleChange =  useCallback((evt: React.ChangeEvent<HTMLInputElement>, id: number) => {
    addQuantity(id, +evt.target.value)
  }, [addQuantity]);

  useEffect(()=> {
    getProducts();
  }, [getProducts]);

  return (
    <section className="products">
      <div className="products__wrapper">
        <Template>
          <h2 className="products__title title-h2">Товары:</h2>
          <ul className="products__list">
            {items?.map(item => {
              return (
                <ProductsItem key={item.id} product={item}
                              onAddClick={onAddClick}
                              onRemoveClick={onRemoveClick}
                              onHandleChange={onHandleChange}

                />
              )
            })}
          </ul>
        </Template>
      </div>
    </section>
  );
});

export default Product;