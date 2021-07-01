import {makeAutoObservable} from 'mobx';
import getCurrencyConverterRequest from "api/currency";


class CurrencyStore {
  price: number | null = null;

  constructor() {
    makeAutoObservable(this);
    this.getProducts = this.getProducts.bind(this);
  }

  async getProducts() {
    try {
      const response = await getCurrencyConverterRequest({from: 'USD', to: 'RUB', amount: 1});
      // console.log(response.data.result);
      this.price = response.data.result;
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

export default new CurrencyStore();