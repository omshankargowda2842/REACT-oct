import { useState, useEffect } from 'react';

 function Countdown() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
    </div>
  );
}
export default Countdown