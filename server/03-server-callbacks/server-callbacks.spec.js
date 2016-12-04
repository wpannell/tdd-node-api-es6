import {lineCount} from './line-count';

describe('the server-callbacks canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.equal(true);
  });

  describe('line count', () => {
    it('for file —— line-count.js —— should be 13', done => {
      const receiveLineCount = numberOfLines => {
        numberOfLines.should.equal(13);
        done();
      };

      lineCount('server/03-server-callbacks/line-count.js', null, receiveLineCount);
    });

    it('for file —— is-not-there.js —— should be cannot open file: is-not-there.js');

  });
});
