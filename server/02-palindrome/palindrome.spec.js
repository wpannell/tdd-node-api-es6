describe('the palindrome canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.equal(true);
  });

  const isPalindrome = phrase => {
    if (phrase === '') return false;
    return phrase.split('').reverse().join('') === phrase;
  };

  describe('palindrome should be', () => {
    it('yes for mom', () => {
      isPalindrome('mom').should.equal(true);
    });

    it('no for dude', () => {
      isPalindrome('dude').should.equal(false);
    });

    it('yes for mom mom', () => {
      isPalindrome('mom mom').should.equal(true);
    });

    it('no for mom dad', () => {
      isPalindrome('mom dad').should.equal(false);
    });

    it('no for empty phrase', () => {
      isPalindrome('').should.equal(false);
    });

    it('no for whitespace only phrase');
  });
});
