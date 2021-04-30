import React, { useState } from 'react';

function Count() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    console.log('+1');
    setNumber(prevNum => prevNum + 1);
  }

  const onDecrease = () => {
    console.log('-1');
    setNumber(prevNum => prevNum -1);
  }

  return (
    <div>
      <h1>{ number }</h1>
      <button onClick={ onDecrease }>-1</button>
      <button onClick={ onIncrease }>+1</button>
    </div>
  );
}

export default Count;