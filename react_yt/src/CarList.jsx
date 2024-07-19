import React, { useState } from 'react';

function CarList() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");



    const handleAddCar = (event) => {
        const newCar = { year: carYear, make: carMake, model: carModel };

        setCars(c => [...c, newCar])
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_, i) => i !== index));
    }

    const handleYearChange = (event) => {
        setCarYear(event.target.value)
    }

    const handleMakeChange = (event) => {
        setCarMake(event.target.value)
    }

    const handleModelChange = (event) => {
        setCarModel(event.target.value)
    }


    return (
        <>
            <h2>List of Car Objects: </h2>
            <ul>
                {cars.map((cars, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {cars.year} {cars.make} {cars.model}
                    </li>)}
            </ul >

            <input type="number" value={carYear} onChange={handleYearChange} /> <br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make" /> <br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model" /><br />
            <button onClick={handleAddCar}>Add Car</button>
        </>
    );
}

export default CarList