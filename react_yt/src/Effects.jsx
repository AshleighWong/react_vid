import React, { useState, useEffect } from 'react';

function Effects() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    //by using useeffect it keeos code more organized 
    //
    useEffect(() => {
        document.title = `Count: ${count} ${color}`

    }, [count, color]);

    const addCount = () => {
        setCount(c => c + 1);
    }

    const subCount = () => {
        setCount(c => c - 1)
    }

    const changeColor = () => {
        setColor(c => c === "green" ? "red" : "green")
    }


    return (
        <div>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Subtract</button> <br />
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default Effects