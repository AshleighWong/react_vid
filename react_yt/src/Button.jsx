
const Button = () => {

    // e is an event object parameter
    const handleClick = (e) => e.target.textContent = "YOU HATE ASHLEIGH! 😡 "

    return (
        <>
            {/* on click and on double click */}
            <button onDoubleClick={(e) => handleClick(e)}>I love Mahin 😃</button >
        </>
    );
}

export default Button

{/* <button onClick={() => handleClick2("Bro")}>I love Mahin 😃</button > */ }


// let count = 0
//     const handleClick = (name) => {
//         if (count < 3) {
//             count++;
//             console.log(`${name} you clicked me ${count} time/s`)
//         }
//         else {
//             console.log(`${name} stop clicking me!`)
//         }
//     }



//     return (
//         <>
//             <button onClick={() => handleClick("Mahin")}>I love Mahin 😃</button >
//         </>
//     );