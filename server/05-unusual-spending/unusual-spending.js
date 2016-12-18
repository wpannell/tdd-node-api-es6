import { fetch } from './fetch';
import { categorize } from './categorize';
import { notify } from './notify';

const unusualSpending = userId => {
  let onSuccess = paymentInfo => {
    let categorizedInfo = categorize(paymentInfo);
    notify(userId, categorizedInfo);
  };

  return fetch(userId).then(onSuccess);
};

export {unusualSpending};
