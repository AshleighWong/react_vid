import { useState } from 'react'
import './App.css'
import Student from './Student';
import UserGreeting from './UserGreeting';
import List from './List';
import Button from './Button';
import ProfilePicture from './ProfilePicture';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Component from './Component';
import ColorPicker from './ColorPicker';
import Count from './Count';
import MyComponent2 from './MyComponent2';
import Arrays from './Arrays'
import CarList from './CarList';
import Effects from './Effects';
import Effects2 from './Effects2';
import ComponentA from './ComponentA';

function App() {

  return (
    <>
      <ComponentA></ComponentA>
    </>
  );
}



export default App

{/* <UserGreeting isLoggedIn={true} username="Aashlay"></UserGreeting>
<UserGreeting></UserGreeting> */}


// function App() {
//   const fruits = [{ id: 1, name: "apple", calories: 95 },
//   { id: 2, name: "orange", calories: 45 },
//   { id: 3, name: "cocount", calories: 105 },
//   { id: 4, name: "banana", calories: 159 }];

//   const vegetables = [{ id: 5, name: "carrot", calories: 30 },
//   { id: 6, name: "broccoli", calories: 50 },
//   { id: 7, name: "spinach", calories: 20 },
//   { id: 8, name: "potato", calories: 80 }];

//   return (
//     <>
//       {/* if list is empty DONT render list, if its not empty render list */}
//       {fruits.length > 0 ? <List items={fruits} category="Fruits"></List> : null}
//       {/* or you can do {fruits.length > 0 && <List items={fruits} category="Fruits"></List>} */}
//       {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"></List> : null}
//     </>
//   );
// }