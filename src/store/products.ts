import {makeAutoObservable} from 'mobx';
import {IProductItem} from "interfaces";
import getProductsRequest from 'api/products'
import {requestWrapper} from 'api';

class Products {
  items: Array<IProductItem> = [];
  error: any = null;

  constructor() {
    makeAutoObservable(this);
    this.setIsAdded = this.setIsAdded.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  async getProducts() {
    requestWrapper({
      request: () => getProductsRequest(),
      onErrorHandler: (response) => {
        this.error = response.data;
      },
      onSuccessHandler: (response) => {
        this.items = response.data;
      },
    });
  }

  setIsAdded(id: number) {
    this.items = this.items.map(item =>
      id === item.id ?
        {
          ...item,
          isAdded: !item.isAdded,
        }
        : item
    );
  }
}

export default new Products();