import {lineCount} from './line-count';

describe('the server-callbacks canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.equal(true);
  });

  describe('line count for file —— line-count.js —— should be', () => {
    it('13', done => {
      const receiveLineCount = numberOfLines => {
        numberOfLines.should.equal(13);
      };

      lineCount('server/03-server-callbacks/line-count.js', null, receiveLineCount);
    });
  });
});
