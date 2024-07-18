import React, { useState } from 'react';

function Count() {

    const [count, setCount] = useState(0);

    const increment = () => {

        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {

        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    }

    const reset = () => {

        // dont need previous state
        setCount(0);
    }


    return (
        <div className="counter-container">
            <p className="counter-display">{count}</p>
            <button className="counter-button" onClick={increment}>+1</button>
            <button className="counter-button" onClick={decrement}>-1</button>
            <button className="counter-button" onClick={reset}>reset</button>
        </div>
    );

}

export default Count