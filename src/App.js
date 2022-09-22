import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        if (json.length > 0) {
          setSelectedCoin(json[0]);
        }
        setLoading(false);
      })
  }, []);

  const handleSelect = (e) => {
    const jsonObj = JSON.parse(e.target.value);
    console.log(e.target.value);
    setSelectedCoin(jsonObj);
  }

  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <div>Loading...</div> :
        (
          <div>
            <input type="number" onChange={e => setAmount(e.target.value)}
              value={amount}
              placeholder="Enter the USD" />

            <select onChange={handleSelect}>
              {coins.map((coin) => (
                <option key={coin.id} value={JSON.stringify(coin)}>
                  {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
                </option>
              ))}
            </select>
            {selectedCoin && <h3>You can buy {amount / selectedCoin.quotes.USD.price} {selectedCoin.name}</h3>}
          </div>
        )}
    </div>
  );
}

export default App;
