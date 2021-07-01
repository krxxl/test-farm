import {currencyApi} from 'api';
import {ICurrency} from 'interfaces';

export default function getCurrencyConverterRequest({
  from = 'USD',
  to = 'RUB',
  amount = 1,
}: ICurrency) {
  return currencyApi.get('/convert', {
    params: {
      format: 'json',
      from,
      to,
      amount,
    },
  });
}