import { makeAutoObservable } from 'mobx';
import {IProductItem} from "interfaces";

class Products {
  items: Array<IProductItem> = [
    {
      "id": 1,
      "title": "aviator",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/2814_61_1.jpg",
      "price": 147,
      "shopQuantity": 11,
    },
    {
      "id": 2,
      "title": "hygge denmark",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/63_04_1.jpg",
      "price": 4444,
      "shopQuantity": 4,
    },
    {
      "id": 3,
      "title": "paul frank",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/1823_02_1.jpg",
      "price": 3666,
      "shopQuantity": 7,
    },
    {
      "id": 4,
      "title": "persol",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/271_18_1.jpg",
      "price": 1024,
      "shopQuantity": 6,

    },
    {
      "id": 5,
      "title": "pink ribbon",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/2541_13_2.jpg",
      "price": 786,
      "shopQuantity": 12,
    },
    {
      "id": 6,
      "title": "rayban",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/437_69_1.jpg",
      "price": 899,
      "shopQuantity": 55,
    },
    {
      "id": 7,
      "title": "retro",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/260_83_1.jpg",
      "price": 1777,
      "shopQuantity": 8,
    },
    {
      "id": 8,
      "title": "select specs",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/1662_12_1.jpg",
      "price": 1100,
      "shopQuantity": 11,
    },
    {
      "id": 9,
      "title": "sigma",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/1100_03_5.jpg",
      "price": 550,
      "shopQuantity": 7,
    },
    {
      "id": 10,
      "title": "aviator",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/62_48_1.jpg",
      "price": 700,
      "shopQuantity": 5,
    },
    {
      "id": 11,
      "title": "street eyewear",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/601_05_1.jpg",
      "price": 1500,
      "shopQuantity": 4,
    },
    {
      "id": 12,
      "title": "super lite",
      "img": "https://d9qzjwuieyamt.cloudfront.net/public/ru/res/images/items/fullsized/8_49_1.jpg",
      "price": 1200,
      "shopQuantity": 10,
    }
  ];

  constructor() {
    makeAutoObservable(this);
  }

}

export default new Products();