import td from 'testdouble';

describe('fetch should', () => {
  it('showcase that the infrastructure works (canary)', () => {
    true.should.equal(true);
  });

  // it('interact with months', () => {
  //   const months = td.replace('./months').months;
  //   console.log(months);
  //   td.when(months.thisMonth()).thenReturn(12);
  //   td.when(months.lastMonth()).thenReturn(11);
  //
  //   const fetch = require('./fetch').fetch;
  //
  //   fetch();
  //
  //   td.verify(months.thisMonth());
  //   td.verify(months.lastMonth());
  // });

  afterEach(() => td.reset());
});
