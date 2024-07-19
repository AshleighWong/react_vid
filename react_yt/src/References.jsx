import React, { useState, useEffect, useRef } from 'react';

function References() {

    // let [number, setNumber] = useState(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("RENDERED");
    });

    const handleClick1 = () => {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
    }

    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
    }

    const handleClick3 = () => {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return (
        <div>
            <button onClick={handleClick1}>Click Me 1</button>
            <input ref={inputRef1} />
            <button onClick={handleClick2}>Click Me 2</button>
            <input ref={inputRef2} />
            <button onClick={handleClick3}>Click Me 3</button>
            <input ref={inputRef3} />
        </div>
    );
}

export default References