import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then(response => response.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
      console.log(json);
    })
  }, []);

  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <div>Loading...</div> : <div>{coins.length} coins loaded!</div>}
      <ul>
        {coins.map(coin => (
          <li key={coin.id}>
            <h2>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
