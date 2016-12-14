import td from 'testdouble';

describe('unusual spending should', function() {
  it('interact with fetch, high-spending and notify', function(done) {
    const fetch = td.replace('./fetch').fetch;
    const categorize = td.replace('./categorize').categorize;
    const notify = td.replace('./notify').notify;

    let unusualSpending;

    td.when(fetch('dummy-user-id')).thenResolve('dummy-payments-response');

    td.when(categorize('dummy-payments-response')).thenReturn(
        'dummy-categorized-payments');

    unusualSpending = require('./unusual-spending.js').unusualSpending;

    const receiveCategorizedPayments = categorizedPayments => {
      categorizedPayments.should.equal('dummy-categorized-payments');
      td.verify(notify('dummy-user-id', 'dummy-categorized-payments'));
      done();
    };

    unusualSpending('dummy-user-id').then(receiveCategorizedPayments);
  });
});
