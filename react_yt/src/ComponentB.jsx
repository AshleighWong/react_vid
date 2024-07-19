import ComponentC from "./ComponentC.jsx";
import React, { useContext } from 'react';
import { UserContext } from './ComponentA.jsx'

function ComponentB() {

    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>ComponentB</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentC></ComponentC>
        </div>
    );
}

export default ComponentB