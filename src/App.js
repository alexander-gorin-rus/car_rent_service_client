import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
const [values, setValues] = useState()

useEffect(() => {
  axios.get('http://localhost:5004/api/v1/cars')
    .then(res => setValues(res))
    .catch(err => console.log(err))
},[])


  
  return (
    <div className="App">
      {JSON.stringify(values.data.cars)}
      {values.data.cars.map((c) => (
        <div key={c.id}>
          <p>Mark: {c.car_mark}</p>
          <p>Type: {c.car_type}</p>
          <p>Model: {c.car_model}</p>
        </div>
      ))} 
    </div>
  );
}

export default App;
