import React, { useState } from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Mahin")
    }

    const incrememntAge = () => {
        setAge(age + 2)
    }

    const toggleEmployed = () => {
        setIsEmployed(!isEmployed)
    }



    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}> Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrememntAge}>Set Age</button>

            <p>Is emplpoyed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployed}> Employed</button>
        </div>
    );
}
export default MyComponent


// const[age, setAge] = useState(0);

// const updateName = () => {
//     setName("Mahin")
//     console.log(name)
// }
// return (
//     <div>
//         <p>Name: {name}</p>
//         <button onClick={updateName}> Set Name</button>
//     </div>
// );