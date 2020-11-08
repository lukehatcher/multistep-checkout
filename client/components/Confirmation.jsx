import React from 'react';

class Confirmation extends React.Component {
    constructor(props) {
        super(props)
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