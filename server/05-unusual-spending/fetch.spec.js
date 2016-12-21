import td from 'testdouble';

describe('fetch should', () => {
  it('showcase that the infrastructure works (canary)', () => {
    true.should.equal(true);
  });

  it('invoke a call for this month and last month', () => {
    const months = td.replace('./months');
    const fetch = require('./fetch').fetch;

    fetch();

    td.verify(months.thisMonth());
    td.verify(months.lastMonth());
  });

  it('interact with the payment api', () => {
    const paymentApi = td.replace('./paymentApi').paymentApi;

    const months = td.replace('./months');
    td.when(months.thisMonth()).thenReturn(12);
    td.when(months.lastMonth()).thenReturn(11);
    let userId = 42;

    const fetch = require('./fetch').fetch;

    fetch(userId);

    td.verify(paymentApi(userId, 12, 11));
  });

  it('return an object of formatted date and time');

  afterEach(() => td.reset());
});
