const request = require('supertest');

const assert = require('assert')

const app = require('../app');

describe('GET /', function () {
  it('expect 200 if response.ok === true', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);

        assert.strictEqual(res.status, 200);
        return done();
      });

  });
});