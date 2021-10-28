import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import axios from 'axios';

function App() {
  const [coins, setCoins] = useState([]);
  const [kraken_BTC, set_Kraken_BTC] = useState(0);
  const [kraken_ETH, set_Kraken_ETH] = useState(0);
  const [binance_BTC, set_Binance_BTC] = useState(0);
  const [binance_ETH, set_Binance_ETH] = useState(0);

  useEffect(() => {
    const getCoins = async () => {
      const { data: kraken_Coins } = await axios.get('/api/kraken/prices');
      const { data: binance_Coins } = await axios.get('/api/binance/prices');
      set_Kraken_BTC(kraken_Coins.kraken_BTC.result.XXBTZUSD);
      set_Kraken_ETH(kraken_Coins.kraken_ETH.result.XETHZUSD);
      set_Binance_BTC(binance_Coins.binance_BTC);
      set_Binance_ETH(binance_Coins.binance_ETH);
    };
    getCoins();
  }, []);

  return (
    <div className='App'>
      <Main />
    </div>
  );
}

export default App;
