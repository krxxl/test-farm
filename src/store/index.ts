import { makeAutoObservable } from 'mobx';
import {IcartItem} from "interfaces";

class Products {
  items: Array<IcartItem> = [
    {
      "id": 1,
      "title": "aviator",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/2814_61_1.jpg",
      "price": 147,
      "quantity": 0,
      "shopQuantity": 11,
      "isAdded": false
    },
    {
      "id": 2,
      "title": "hygge denmark",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/63_04_1.jpg",
      "price": 4444,
      "quantity": 0,
      "shopQuantity": 4,
      "isAdded": false
    },
    {
      "id": 3,
      "title": "paul frank",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/1823_02_1.jpg",
      "price": 3666,
      "quantity": 0,
      "shopQuantity": 7,
      "isAdded": false
    },
    {
      "id": 4,
      "title": "persol",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/271_18_1.jpg",
      "price": 1024,
      "quantity": 0,
      "shopQuantity": 6,
      "isAdded": false
    },
    {
      "id": 5,
      "title": "pink ribbon",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/2541_13_2.jpg",
      "price": 786,
      "quantity": 0,
      "shopQuantity": 12,
      "isAdded": false
    },
    {
      "id": 6,
      "title": "rayban",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/437_69_1.jpg",
      "price": 899,
      "quantity": 0,
      "shopQuantity": 55,
      "isAdded": false
    },
    {
      "id": 7,
      "title": "retro",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/260_83_1.jpg",
      "price": 1777,
      "quantity": 0,
      "shopQuantity": 8,
      "isAdded": false
    },
    {
      "id": 8,
      "title": "select specs",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/1662_12_1.jpg",
      "price": 1100,
      "quantity": 0,
      "shopQuantity": 11,
      "isAdded": false
    },
    {
      "id": 9,
      "title": "sigma",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/1100_03_5.jpg",
      "price": 550,
      "quantity": 0,
      "shopQuantity": 7,
      "isAdded": false
    },
    {
      "id": 10,
      "title": "aviator",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/62_48_1.jpg",
      "price": 700,
      "quantity": 0,
      "shopQuantity": 5,
      "isAdded": false
    },
    {
      "id": 11,
      "title": "street eyewear",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/601_05_1.jpg",
      "price": 1500,
      "quantity": 0,
      "shopQuantity": 4,
      "isAdded": false
    },
    {
      "id": 12,
      "title": "super lite",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/8_49_1.jpg",
      "price": 1200,
      "quantity": 0,
      "shopQuantity": 10,
      "isAdded": false
    }
  ];

  constructor() {
    makeAutoObservable(this);
  }

  toggleAddToCart(id: number): void {
    this.items = this.items.map(item =>
      id === item.id
        ?
        item.isAdded === true ? {
            ...item,
            isAdded: !item.isAdded,
            quantity: 0
          } : {
            ...item,
            isAdded: !item.isAdded,
            quantity: 1
        }
        : item
    );
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
    return this.items.reduce((acc, cur) => acc + cur.quantity, 0)
  }

  get sumOfProducts(): number {
    return this.items.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
  }
}

export default new Products();