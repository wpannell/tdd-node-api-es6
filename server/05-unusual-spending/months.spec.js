import td from 'testdouble';

/* MONK'S JUNK: why are we testing for the months return value in fetch? */
describe('Months tests', () => {
  it('should reveal the infrastructure to be correct (canary)', () => {
    true.should.equal(true);
  });

  //noinspection ESLint
  it('should expect months.thisMonth() to return the number value for the' +
     ' current month', () => {
    /* MONK'S JUNK: td.replace will get a module with months on it, but it's
     not a test double */
    const months = td.replace('./months').months;
    months.thisMonth().should.equal(12);

  });

  it('should expect months.lastMonth() to return the number value for' +
     ' the previous month', () => {
    const months = td.replace('./months').months;
    months.lastMonth().should.equal(11);
  });

  after(() => {
    td.reset();
  });
});
