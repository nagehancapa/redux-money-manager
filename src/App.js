import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, reset } from "./store/balance/actions";
import { selectBalance } from "./store/balance/selectors";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [customAmount, setCustomAmount] = useState(0);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        Withdraw 10$
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(deposit(parseInt(customAmount)));
          setCustomAmount(0);
        }}
      >
        <input
          type="text"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
          }}
        />
        <button type="submit">Deposit custom amount</button>
      </form>
    </div>
  );
}

export default App;
