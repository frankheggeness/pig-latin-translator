const pigTranslate = require('../pig-translate.js');
const chai = require('chai');
const should = chai.should();

describe('Pig Translator', function() {
  it('should return a string', function() {
    const string = pigTranslate('banana');
    string.should.be.a('string');
  });
  it('should return a string with -ay appended if string starts with a vowel', function() {
    const string = pigTranslate('avocado');
    string.should.deep.equal('avocado-ay');
  });
  it('should return a string with all consonant letters up to the first vowel moved to the end of the word, with -ay appended', function() {
    const string = pigTranslate('chimichanga');
    string.should.deep.equal('imichanga-chay');
  });
});
