import {api} from 'api';
import {IProductItem} from "interfaces";

export default function getProductsRequest() {
  return api.get('/products/', {
    transformResponse: [
      (data) => {
        return data.map((product: IProductItem) => {
          return {...product, isAdded: false}
        });
      },
    ],
  });
}