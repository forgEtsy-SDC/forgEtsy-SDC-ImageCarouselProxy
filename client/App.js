import React, { Component } from 'react';
import Style from './App.css';

const axios = require('axios');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3002/test').then(({ data }) => {
            this.setState({ test: data });
        }).catch(() => {
            console.log(`Error with GET request at 'localhost:3002/test'`);
        })
    }

    render() {
        return (
            <div>
                <h1>Hello Keenan! This is the client from the proxy!</h1>
                <h2>{this.state.test}</h2>
            </div>
        );
    }
}

export default App;