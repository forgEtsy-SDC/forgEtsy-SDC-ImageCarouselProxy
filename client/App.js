import React, { Component } from 'react';
import Style from './App.css';

const axios = require('axios');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listing_id: 173033626,
            title: '',
            price: '',
            description: '',
            shopName: '',
            shopIconURL: ''
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3002/api/listing/${this.state.listing_id}`)
            .then(({ data }) => {
                console.log(data)
                this.setState({
                    title: data[0].title,
                    price: data[0].price,
                    description: data[0].description,
                    shopName: data[0].Shop.shop_name,
                    shopIconURL: data[0].Shop.icon_url_fullxfull
                })
            })
            .catch(err => console.log)
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2>{this.state.price}</h2>
                <p>{this.state.description}</p>
                <p>{this.state.shopName}</p>
                <p>{this.state.shopIconURL}</p>
            </div>
        );
    }
}

export default App;