import React,  { Component } from 'react';
import DisplayCars from './DisplayCars'

class CarItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return this.props.cars.map((car) => (
          <DisplayCars
          key={car._id}
          car={car}
          />
        ));
      }
}

export default CarItem;