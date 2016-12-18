import td from 'testdouble';

describe('unusual spending should', function() {
  it('verify the basic test infrastructure', () => {
    true.should.equal(true);
  });

  it('handle success case of notifying user of high spending values', () => {
    const fetch = td.replace('./fetch').fetch,
      categorize = td.replace('./categorize').categorize,
      notify = td.replace('./notify').notify,
      userId = 32;

    let unusualSpending = require('./unusual-spending').unusualSpending;

    td.when(fetch(userId)).thenResolve('payment-info');
    td.when(categorize('payment-info')).thenReturn('categorized-info');

    let categorizedPayments = () => {
      td.verify(notify(userId, 'categorized-info'));
    };

    unusualSpending(userId).then(categorizedPayments);
  });

  after(() => {
    td.reset();
  });
});
