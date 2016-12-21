import td from 'testdouble';

describe('fetch should', () => {
  it('showcase that the infrastructure works (canary)', () => {
    true.should.equal(true);
  });

  it('interact with months', () => {
    const months = td.replace('./months');
    const fetch = require('./fetch').fetch;

    fetch();

    td.verify(months.thisMonth());
    td.verify(months.lastMonth());
  });

  afterEach(() => td.reset());
});
