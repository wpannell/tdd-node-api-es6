import {lineCount} from './line-count';

describe('the server-callbacks canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.equal(true);
  });

  describe('line count for file —— line-count.js —— should be', () => {
    it('13');
  });
});
