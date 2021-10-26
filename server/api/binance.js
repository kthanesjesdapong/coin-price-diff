const router = require('express').Router();
const axios = require('axios');

router.get('/prices', async (req, res, next) => {
  try {
    const { data: binance_BTC } = await axios.get(
      'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
    );
    const { data: binance_ETH } = await axios.get(
      'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT'
    );

    res.json({ binance_BTC, binance_ETH });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
