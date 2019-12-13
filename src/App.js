import React from 'react';
import Cars from './components/Cars'
import AddCar from './components/AddCar'
import SearchCar from './components/SearchCar'

function App() {
  return (
    <div>
        <center><SearchCar />
        <AddCar />
        <Cars/>
        </center>
    </div>
  );
}

export default App;
