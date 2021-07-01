import {makeAutoObservable} from 'mobx';
import {IProductItem} from "interfaces";
import getProductsRequest from 'api/products'

class Products {
  items: Array<IProductItem> = [];


  constructor() {
    makeAutoObservable(this);
    this.setIsAdded = this.setIsAdded.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  async getProducts() {
    try {
      const response = await getProductsRequest();
      this.items = response.data;
    } catch (error) {
      console.log(error.response.data);
    }
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