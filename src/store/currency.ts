import {makeAutoObservable} from 'mobx';
import getCurrencyConverterRequest from "api/currency";
import {requestWrapper} from 'api';


class CurrencyStore {
  price: number | null = null;
  error: any = null;

  constructor() {
    makeAutoObservable(this);
    this.getProducts = this.getProducts.bind(this);
  }

  async getProducts() {
    requestWrapper({
      request: () => getCurrencyConverterRequest({from: 'USD', to: 'RUB', amount: 1}),
      onErrorHandler: (response) => {
        this.error = response.data;
      },
      onSuccessHandler: (response) => {
        this.price = response.data.result;
      },
    });
  }
}

export default new CurrencyStore();