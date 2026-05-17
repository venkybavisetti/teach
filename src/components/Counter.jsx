import { useState } from 'react';

const Counter = (props) => {
  const [counterValue, setCounterValue] = useState(0); // skip

  const decrement = () => {
    setCounterValue(counterValue - 1);
  };

  const increment = () => {
    setCounterValue(counterValue + 1);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={decrement}>-</button>
        <div>{props.parent}-</div>
        <div>{counterValue}</div>
        <button onClick={increment}>+</button>
      </div>
      {props.parent === counterValue && <div>Matched</div>}
    </div>
  );
};

export default Counter;
