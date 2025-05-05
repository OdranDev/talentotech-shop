import { useState } from 'react';

function MyButton({onClick}) {
  const [count, setCount] = useState(0)
    return (
      <div style={{margin:'1rem', padding:'1rem',border:'1px dotted yellow'}}>
        <button onClick={onClick}>I'm a button</button>
        <p>And We going to use it</p>
        <p>
          count is {count}
        </p>
        <button onClick={() => setCount((count) => count > 0 ? count - 1 : count)}>minus</button>
        <button onClick={() => setCount((count) => count + 1)}>sum</button>
      </div>
      );
}
export default MyButton
