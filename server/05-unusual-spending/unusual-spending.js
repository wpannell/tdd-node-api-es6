import {fetch} from './fetch';
import {categorize} from './categorize';
import {notify} from './notify';

const unusualSpending = userId => {
  const onSuccess = payments => {
    const categorizedPayments = categorize(payments);
    notify(userId, categorizedPayments);
    return Promise.resolve(categorizedPayments);
  };

  return fetch(userId).then(onSuccess);
};
export {unusualSpending};
