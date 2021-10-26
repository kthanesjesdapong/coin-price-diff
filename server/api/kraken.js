const router = require('express').Router();
const axios = require('axios');

router.use('/prices', async (req, res, next) => {
  try {
    const { data: kraken_BTC } = await axios.get(
      'https://api.kraken.com/0/public/Ticker?pair=BTCUSD'
    );
    const { data: kraken_ETC } = await axios.get(
      'https://api.kraken.com/0/public/Ticker?pair=ETHUSD'
    );
    res.json({ kraken_BTC, kraken_ETC });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
