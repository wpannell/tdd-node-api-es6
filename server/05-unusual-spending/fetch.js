import { thisMonth, lastMonth } from './months';
import { paymentApi } from './paymentApi';

const fetch = userId => paymentApi(userId, thisMonth(), lastMonth());

export { fetch };
