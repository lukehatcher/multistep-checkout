import axios from 'axios';
import React from 'react';

class Confirmation extends React.Component {
    constructor(props) {
        super(props)
        this.fetchUserInfo = this.fetchUserInfo.bind(this);
    }

    componentDidMount() {
        this.fetchUserInfo();
    }

    fetchUserInfo() {
        // url = `/shop:${this.props.name}`
        let url = '/shop';
        axios.get(url)
            .then((response) => {
                console.log('res cliet data', response);
                // would want to post it for them to see
            })
            .catch((err) => {
                console.log('err in client get req: ', err);
            })
    }

    render() {
        return (
            <div>
                <h1>order overview</h1>
                <p>review information below and place order</p>
                <button onClick={this.props.handlePlaceOrderClick}>place order</button>
            </div>
        );
    }
}

export default Confirmation;