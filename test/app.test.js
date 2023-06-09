const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Error Handler', function () {
  it('should handle 404 errors', function (done) {
    request(app)
      .get('/no-route')
      .expect(404)
      .end(function (err, res) {
        if (err) return done(err);
        assert.strictEqual(res.status, 404);
        return done();
      });
  });
});
