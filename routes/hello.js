const Router = require('express');

const router = new Router();

const Hello = require('../src/hello');

router.get('/', (req, res) => {
  const newGreet = new Hello();
  const name = req.query.val1;

  res.render('hello', {
    sayHello: newGreet.greet(name),
  });
});

module.exports = router;
