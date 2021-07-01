import axios from 'axios';
import {ARRAY_SUCCES_STATUS_CODES} from "constant";

export const api = axios.create({
  baseURL: `http://127.0.0.1:3001/`,
  responseType: 'json',
  withCredentials: true,
});


export const currencyApi = axios.create({
  baseURL: `https://fixer-fixer-currency-v1.p.rapidapi.com`,
  method: 'GET',
  responseType: 'json',
  // withCredentials: true,
  headers: {
    'x-rapidapi-key': 'f9a5aa0335msh3f0782209638709p1a6090jsn359e0ab0c0f3',
    'x-rapidapi-host': 'fixer-fixer-currency-v1.p.rapidapi.com'
  }
});

export const requestWrapper = async ({
                                         request,
                                         onErrorHandler,
                                         onSuccessHandler,
                                     }: {
    request: any;
    onErrorHandler: (result: any) => void;
    onSuccessHandler: (result: any) => void;
}): Promise<void> => {

    const result = await request();
    let getFunc: any = () => '';
    if (
        result.statusCode &&
        !ARRAY_SUCCES_STATUS_CODES.includes(result.statusCode)
    ) {
        getFunc = () => onErrorHandler(result);
    } else {
        getFunc = () => onSuccessHandler(result);
    }
    await getFunc();

};