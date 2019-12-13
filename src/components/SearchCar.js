import React,  { Component } from 'react';
import axios from 'axios'

class SearchCar extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
        query: '',
        result: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.organiseData = this.organiseData.bind(this);
        console.log(this.state.query)
    }

    onSubmit(e) {
        e.preventDefault();
        let url = `http://localhost:3000/cars`
        const {query, result} = this.state;
        axios
          .get(url)
          .then(response => {
            this.organiseData(response, query)
            console.log("success")
          })
          .then(this.setState({query: ''}))
          .catch(error => {
            console.log(error.response);
          });
    }

    organiseData(res, query){
        return res.data.forEach(element => element.make.toLowerCase().includes(query) ? this.setState({result: element}) : null)
    }

    onChange(e){
        this.setState({ query: e.target.value });
      }

    render(){
        const { make, model, color, year } = this.state.result;
        return (
            <div>
                <h1>Search Car by Make</h1>
                <form onSubmit={e => {this.onSubmit(e)}}>
                <label>
                    <input type="text" value={this.state.query} onChange={this.onChange} />
                    </label>

                    <input type="submit" value="Submit"/>
                </form>
                <p>{make} {model} {color} {year}</p>
            </div>
        );
    }
}

export default SearchCar;