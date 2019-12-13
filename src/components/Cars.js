import React,  { Component } from 'react';
import axios from 'axios'
import CarItem from './CarItem'

class Cars extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
        cars: []
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        let url = 'http://localhost:3000/cars'
        axios
          .get(url)
          .then(response => {
            console.log("success")
            this.setState({ cars: response.data })
            console.log(this.state.cars)
          })
          .catch(error => {
            console.log("error here")
            console.log(error.response);
          });
    }

    render(){
        return (
            <div>
                <h1>Cars</h1>
                <button onClick={e => {this.onClick(e)}}>View Cars</button>
                <CarItem
                cars={this.state.cars} />
            </div>
        );
    }
}

export default Cars;
