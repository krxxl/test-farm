import './index.scss';

import React, {useEffect} from 'react';

import {observer} from "mobx-react-lite";

import {CurrencyStore} from 'store';

const Currency: React.FC = observer(() => {

  const {getProducts} = CurrencyStore;

  useEffect(() => {
    getProducts();
    const intervalID: NodeJS.Timeout = setInterval(
        () =>  getProducts(),
        36000
    );
    return () => {clearInterval(intervalID)}
  }, [getProducts]);

  return (
    <div className='currency'>
      <span>1 USD </span>= <span>{(CurrencyStore.price || 0).toFixed(2)} RUB</span>
    </div>
  )
});

export default Currency;