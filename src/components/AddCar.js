import React,  { Component } from 'react';
import axios from 'axios'

class Cars extends Component {

    constructor(props) {
        super(props);
        this.state = {
            make: '',
            model: '',
            color: '',
            year: ''        
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onMakeChange = this.onMakeChange.bind(this);
        this.onModelChange = this.onModelChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
        this.onYearChange = this.onYearChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let url = `http://localhost:3000/cars`
        const {make, model, color, year} = this.state;
        axios
          .post(url, {make: make, model: model, color: color, year: year})
          .then(response => {
            console.log("success")
          })
          .catch(error => {
            console.log(error.response);
          });
    }

    onMakeChange(e){
        this.setState({ make: e.target.value });
      }

      onModelChange(e){
        this.setState({ model: e.target.value });
      }
      onColorChange(e){
        this.setState({ color: e.target.value });
      }
      onYearChange(e){
        this.setState({ year: e.target.value });
      }

    render(){
        return (
            <div>
                <h1>Add a Car</h1>
                <form onSubmit={e => {this.onSubmit(e)}}>
                    <label>
                    Make:
                    <input type="text" value={this.state.make} onChange={this.onMakeChange} />
                    </label>
                    
                    <label>
                    Model:
                    <input type="text" value={this.state.model} onChange={this.onModelChange} />
                    </label>

                    <label>
                    Color:
                    <input type="text" value={this.state.color} onChange={this.onColorChange} />
                    </label>

                    <label>
                    Year:
                    <input type="text" value={this.state.year} onChange={this.onYearChange} />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Cars;

// type="submit" value="Submit"