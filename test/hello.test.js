const assert = require('assert');

const Hello = require('../src/hello');

describe('Hello', function () {
  beforeEach(function () {
    this.greet = new Hello();
  });
  describe('greet()', function () {
    it('should return Hello default the first time Hello is rendered', function () {
      assert.equal(this.greet.greet(), 'Hello default');
    });
  });
  describe('greet() using parameter', function () {
    it('should return Hello Emil when Emil is entered ', function () {
      assert.equal(this.greet.greet('Emil'), 'Hello Emil');
    });
  });
});
