import React from 'react';
import './index.scss';
import {IcartItem} from "interfaces";
import Button from 'components/UI/Button';
import {observer} from "mobx-react-lite";
import Products from 'store';
import Input from "components/UI/Form/Input";

const ProductsItem: React.FC<IcartItem> = observer((props: IcartItem) => {
  const onBtnClick = (id: number) => {
    Products.toggleAddToCart(id)
  };

  const onHandleChange = (evt: React.ChangeEvent<HTMLInputElement>, id: number) => {
    Products.addQuantity(id, +evt.target.value)
  };

  return (
    <div className="products__item product">
      <div className="product__wrapper">
        <img width={150} height={75} className="product__img" src={props.img} alt={props.title}/>
        <div className="product__info">
          <h2 className='product__info-title title-h2'>{props.title}</h2>
          <p className='product__info-price'>${props.price}</p>
          <p className='product__info-quantity'><span>left in stock: </span>{props.shopQuantity}</p>
        </div>
        <Button onClick={() => onBtnClick(props.id)}
                className='product__btn'>{!props.isAdded ? 'Add to cart' : 'Del from cart'}</Button>
        {props.isAdded &&
        <div className='product__quantity'>
          <Input value={props.quantity} placeholder='Введите количество...' onChange={(evt) => onHandleChange(evt, props.id)} min={1} max={props.shopQuantity} type='number'
                 className='product__input'/>
        </div>}
      </div>
    </div>
  );
});

export default ProductsItem;