const router = require('express').Router();

router.use('/binance', require('./binance.js'));
router.use('/kraken', require('./kraken'));
//mounting both our binance / kraken

module.exports = router;
