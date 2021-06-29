import './index.scss';
import React from 'react';
import {observer} from "mobx-react-lite";
import Cart from 'store/cart';
import {IProduct} from "interfaces";
import Button from 'components/UI/Button';
import Input from "components/UI/Form/Input";

const ProductsItem: React.FC<IProduct> = observer(({product, onAddClick, onRemoveClick, onHandleChange}) => {

  const isAdded = Cart.items.map(item => item.id).includes(product.id);

  return (
    <div className="products__item product">
      <div className="product__wrapper">
        <img width={150} height={75} className="product__img" src={product.img} alt={product.title}/>
        <div className="product__info">
          <h2 className='product__info-title title-h2'>{product.title}</h2>
          <p className='product__info-price'>${product.price}</p>
          <p className='product__info-quantity'><span>left in stock: </span>{product.shopQuantity}</p>
        </div>
        {!isAdded ? <Button onClick={() => onAddClick(product)}
                            className='product__btn'> Add to cart</Button> :
          <>
            <Button onClick={() => onRemoveClick(product.id)}
                    className='product__btn'>Del from cart</Button>
            <div className='product__quantity'>
              <Input placeholder='Введите количество...' onChange={(evt) => onHandleChange(evt, product.id)} min={1} max={product.shopQuantity} type='number'
              className='product__input'/>
            </div>
          </>
        }
      </div>
    </div>
  );
});

export default ProductsItem;