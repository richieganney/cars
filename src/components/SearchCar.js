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
            console.log(result)
          })
          .catch(error => {
            console.log(error.response);
          });
    }

    organiseData(res, query){
        res.data.forEach(element => element.make.includes(query) ? this.setState({result: element}) : null)
    }

    onChange(e){
        this.setState({ query: e.target.value });
      }

    render(){
        return (
            <div>
                <h1>Search Car</h1>
                <form onSubmit={e => {this.onSubmit(e)}}>
                <label>
                    <input type="text" value={this.state.query} onChange={this.onChange} />
                    </label>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default SearchCar;