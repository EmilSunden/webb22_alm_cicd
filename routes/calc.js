const express = require('express');

const router = express.Router();

const Calculator = require('../src/calculator');

const myCalc = new Calculator();

/* GET home page. */
router.get('/', (req, res, next) => {
  const x = Number(req.query.value1);
  const y = Number(req.query.value2);

  res.render('calculator', {
    val1: x,
    val2: y,
    add: myCalc.add(x, y),
    subtract: myCalc.subtract(x, y),
    multiply: myCalc.multiply(x, y),
    divide: myCalc.divide(x, y),
  });
});

module.exports = router;
