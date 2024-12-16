// HOOKS:
// Three rules of Hooks:
// Call Hooks at the top level – Avoid calling Hooks in loops, conditions, or nested functions.
// Call Hooks only in React functions – Use them inside functional components or custom Hooks.
// Call Hooks in the same order – Maintain a consistent order of Hook calls across renders.

import React, { useState } from 'react';

const Hooks = () => {
    const [count, setCount] = useState(0); // Correctly use `useState`

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    // React.useEffect(() => {
    //     setTimeout(()=>{
    //         setCount(count + 1);
    //     },1000)
    // });
    
    return (
        <div>
            <h1>Hooks</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h2>Count: {count}</h2>
        </div>
    );
};

export default Hooks;
