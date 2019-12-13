import React,  { Component } from 'react';
import axios from 'axios';

class DisplayCars extends Component {

    constructor(props) {
        super(props);
        this.removeCar = this.removeCar.bind(this);
    }

    removeCar(e) {
        e.preventDefault();
        let url = `http://localhost:3000`
        axios.delete(url, { data: {
                            make: this.props.car.make,
                            model: this.props.car.modle,
                            color: this.props.car.color,
                            year: this.props.car.year
                            }
                             })
        //   .then(response => {
        //     console.log("success")
        //     console.log(this.state.car._id)
        //   })
        //   .catch(error => {
        //     console.log("error here")
        //     console.log(error.response);
        //     console.log(this.props.car._id)
        //   });
    }

    render(){
        const { make, model, color, year } = this.props.car;
        return (
            <div>
              <li>{make} {model}, {color}, {year}
                <button onClick={e => {this.removeCar(e)}}>Remove Car</button>
              </li><br></br>
            </div>
        );
    }
}

export default DisplayCars;