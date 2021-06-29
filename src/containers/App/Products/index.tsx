//TODO На всякий случай напишу:
// Всегда сначала импортируются стили, потом React, потом Mobx, потом Store из Mobx, потом компоненты, потом хелперы
//Отделяем переносом строк
import './index.scss';

import React, {useCallback} from 'react';

import {observer} from "mobx-react-lite";
import Products from "store/products";
import Cart from "store/cart";

import Template from "containers/App/Template";
import ProductsItem from "containers/App/Products/ProductItem";

import {IProductItem} from "interfaces";


const Product: React.FC = observer(() => {
 //TODO можно сделать деструктуризацию?
  // const {addToCart}=Cart;

  //TODO зависимости
  const onAddClick = useCallback((item: IProductItem) => {
    Cart.addToCart({...item, quantity: 1})
  }, []);
  //TODO зависимости
  const onRemoveClick = useCallback((id: number) => {
    Cart.removeFromCart(id)
  }, []);
  //TODO зависимости
  const onHandleChange =  useCallback((evt: React.ChangeEvent<HTMLInputElement>, id: number) => {
    Cart.addQuantity(id, +evt.target.value)
  }, []);

  return (
    <section className="products">
      <div className="products__wrapper">
        <Template>
          <h2 className="products__title title-h2">Товары:</h2>
          <ul className="products__list">
            {/*TODO если пришел пустой массив ?*/}
            {Products.items?.map(item => {
              return (
                <ProductsItem key={item.id} product={item}
                              onAddClick={onAddClick}
                              onRemoveClick={onRemoveClick}
                              onHandleChange={onHandleChange}/>
              )
            })}
          </ul>
        </Template>
      </div>
    </section>
  );
});

export default Product;