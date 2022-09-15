import { useState } from "react";
import classes from  './counter.module.scss';


export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(c => c > 9 ? 0 : ++c);

  return (
    <div className={classes.root}>
      <h1>{count}</h1>
      <button className={classes.main} onClick={increment}>Increment</button>
    </div>
  )
};
