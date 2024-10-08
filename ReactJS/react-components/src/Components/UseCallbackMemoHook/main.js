import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick, children }) => {
  console.log(`${children} Button rendered`);
  return <button onClick={onClick}>{children}</button>;
});

function MainCallbackMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const incrementCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div>
      <h1>Count 1: {count1}</h1>
      <h1>Count 2: {count2}</h1>

      <Button onClick={incrementCount1}>Increment Count 1</Button>
      <Button onClick={incrementCount2}>Increment Count 2</Button>
    </div>
  );
}

export default MainCallbackMemo;
