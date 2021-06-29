import './index.scss';
import React from 'react';
import {observer} from "mobx-react-lite";
import Cart from 'store/cart';
import {IProductItem} from "interfaces";
import Button from 'components/UI/Button';
import Input from "components/UI/Form/Input";

const ProductsItem: React.FC<IProductItem> = observer((props: IProductItem) => {
  const onAddClick = (item: IProductItem) => {
    Cart.addToCart({...item, quantity: 1})
  };

  const onRemoveClick = (id: number) => {
    Cart.removeFromCart(id)
  };

  const onHandleChange = (evt: React.ChangeEvent<HTMLInputElement>, id: number) => {
    Cart.addQuantity(id, +evt.target.value)
  };

  const isAdded = Cart.items.map(item => item.id).includes(props.id);

  return (
    <div className="products__item product">
      <div className="product__wrapper">
        <img width={150} height={75} className="product__img" src={props.img} alt={props.title}/>
        <div className="product__info">
          <h2 className='product__info-title title-h2'>{props.title}</h2>
          <p className='product__info-price'>${props.price}</p>
          <p className='product__info-quantity'><span>left in stock: </span>{props.shopQuantity}</p>
        </div>
        {!isAdded ? <Button onClick={() => onAddClick(props)}
                            className='product__btn'> Add to cart</Button> :
          <>
            <Button onClick={() => onRemoveClick(props.id)}
                    className='product__btn'>Del from cart</Button>
            <div className='product__quantity'>
              <Input placeholder='Введите количество...' onChange={(evt) => onHandleChange(evt, props.id)} min={1} max={props.shopQuantity} type='number'
              className='product__input'/>
            </div>
          </>
        }
      </div>
    </div>
  );
});

export default ProductsItem;