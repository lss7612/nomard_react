import { useState, useEffect } from "react";

let selected_coin = undefined;

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollor, setDollor] = useState(0);
  const [coin, setCoin] = useState({});

  const onChange = (e) => {
    setDollor(e.target.value);
  };

  const onSelect = (e) => {
    console.log(e.target);
    console.log(e.target.value);

    for (let i = 0; i < coins.length; i++) {
      let coin = coins[i];
      if (coin.name == e.target.value) {
        setCoin(coin);
        break;
      }
    }
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        console.log(json);
        setLoading(false);
        setCoins(json);
      });
  }, []);

  return (
    <div>
      <h1>
        Coin Tracker Challenge (
        {coins.length === 0 ? <span>loading...</span> : coins.length})
      </h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <div>
          <input
            id="selected_coin"
            list="coin"
            placeholder="select coin"
            onChange={onSelect}
          ></input>
          <input
            type="number"
            placeholder="how much dollor"
            vlaue={dollor}
            onChange={onChange}
          ></input>
          <hr />
          <strong>you can buy {dollor}</strong>
        </div>
      )}

      <datalist id="coin">
        {coins.map((coin, idx) => {
          return <option key={idx}>{coin.name}</option>;
        })}
      </datalist>
    </div>
  );
}

export default App;
