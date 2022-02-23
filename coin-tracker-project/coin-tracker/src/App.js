import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState(new Array());
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(typeof json);
        console.log(json);
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => {
          return <li>{coin.name}</li>;
        })}
      </ul>
    </div>
  );
}
//https://api.coinpaprika.com/v1/tickers
export default App;
