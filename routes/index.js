const express = require('express');

const router = express.Router();
const pic = '/images/pika.jpg';

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Godly Gamers', pic });
});

module.exports = router;
