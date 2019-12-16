import React,  { Component } from 'react';
import axios from 'axios';
import Car from '../images/car2.png'

class DisplayCars extends Component {

    constructor(props) {
        super(props);
        this.removeCar = this.removeCar.bind(this);
        this.viewCar = this.viewCar.bind(this);
    }

    removeCar(e) {
        e.preventDefault();
        let url = `http://localhost:3000`
        axios.delete(`${url}/cars/${this.props.car._id}`)
        
    }

    viewCar(e){
        e.preventDefault();
        let url = `http://localhost:3000`
        axios.get(`${url}/cars/${this.props.car._id}`)
        .then(response => {
            console.log("success")
          })
          .catch(error => {
            console.log("error here")
            console.log(error.response);
          });
    }

    render(){
        const { make, model, color, year } = this.props.car;
        return (
            <div>
              <li>{make} {model}, {color}, {year}
                <button onClick={e => {this.removeCar(e)}}><img
                    src={Car}
                    alt="car"
                    className="rounded-circle z-depth-1 img-fluid"
                    width={20}
                    height={20}
                /></button>
              </li><br></br>
            </div>
        );
    }
}

export default DisplayCars;