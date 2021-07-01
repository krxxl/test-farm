import './index.scss';

import React, {Fragment} from 'react';

import Button from 'components/UI/Button';
import Input from "components/UI/Form/Input";

import {IProduct} from "interfaces";

const ProductsItem: React.FC<IProduct> = ({product, onAddClick, onRemoveClick, onHandleChange}) => {
   return (
    <div className="products__item product">
      <div className="product__wrapper">
        <img width={150} height={75} className="product__img" src={product.img} alt={product.title}/>
        <div className="product__info">
          <h2 className='product__info-title title-h2'>{product.title}</h2>
          <p className='product__info-price'>${product.price}</p>
          <p className='product__info-quantity'><span>left in stock: </span>{product.shopQuantity}</p>
        </div>
        {!product.isAdded ? <Button onClick={() => onAddClick(product)}
                            className='product__btn'> Add to cart</Button> :
          <Fragment>
            <Button onClick={() => onRemoveClick(product.id)}
                    className='product__btn'>Del from cart</Button>
            <div className='product__quantity'>
              <Input placeholder='Введите количество...' onChange={(evt) => onHandleChange(evt, product.id)} min={1}
                     max={product.shopQuantity} type='number'
                     className='product__input'/>
            </div>
          </Fragment>
        }
      </div>
    </div>
  );
};

export default ProductsItem;