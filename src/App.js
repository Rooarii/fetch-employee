import React from 'react';
import './App.css';
import axios from 'axios';

// import the DisplayEmployee component
import DisplayEmployee from './components/DisplayEmployee';

// store employees datas
const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};

function App() {
  return (
    // call DisplayEmployee component
    <>
      <DisplayEmployee employee={sampleEmployee} /> {/*pass down sampleEmplyee as props*/}
    </>
  );
}

export default App;
