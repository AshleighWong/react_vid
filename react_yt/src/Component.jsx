
import React, { useState } from 'react';

function Component() {
    const [name, setName] = useState("Mahin");
    const [quant, setQuant] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantChange = (event) => {
        setQuant(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value)
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value)
    }

    return (
        <>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quant} onChange={handleQuantChange} type="number"></input>
            <p>Quantity: {quant}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value=""> Select and option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                Pick Up
            </label> <br />
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </>

    );
}

export default Component