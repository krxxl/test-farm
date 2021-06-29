import { makeAutoObservable } from 'mobx';
import {IcartItem} from "interfaces";

class Cart {
  items: Array<IcartItem> = []

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(item: IcartItem): void {
    this.items.push(item)
  }

  removeFromCart(id: number): void {
    this.items = this.items.filter(item => item.id !== id)
  }

  addQuantity(id: number, quantity: number): void {
    this.items = this.items.map(item =>
      id === item.id
        ? {
            ...item,
            quantity,
          }
        : item
    );
  }

  get countProducts(): number {
    return this.items.reduce((acc, cur) => acc + (cur?.quantity || 0), 0)
  }

  get sumOfProducts(): number {
    return this.items.reduce((acc, cur) => acc + (cur?.quantity || 0) * cur.price, 0)
  }
}

export default new Cart();