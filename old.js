const matrixGenerator = require('/pig-translate.js');
const chai = require('chai');
const should = chai.should();

describe('Pig Translator', function() {
  it('should return a string', function() {
    const string = pigTranslate('banana');
    string.should.be.a('string');
  });
});
