describe('the palindrome canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.equal(true);
  });

  const isPalindrome = phrase => true;

  describe('palindrome should be', () => {
    it('yes for mom', () => {
      isPalindrome('mom').should.equal(true);
    });

    it('no for dude');
    it('yes for mom mom');
    it('no for mom dad');
    it('no for empty phrase');
    it('no for whitespace only phrase');
  });
});
