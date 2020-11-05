import React from 'react';
import Confirmation from './Confirmation.jsx';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkingOut: true,
            f1: false,
            f2: false,
            f3: false,
            confirmationPage: false,
            name: '',
            email: '',
            password: '',
            line1: '',
            line2: '',
            city: '',
            state: '',
            zipcode: '',
            cell: '',
            ccnumb: '',
            expdate: '',
            cvv: '',
            billzip: ''
        }
        this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
        this.handleF1Next = this.handleF1Next.bind(this);
        this.handleF2Next = this.handleF2Next.bind(this);
        this.handleF3Next = this.handleF3Next.bind(this);
        this.handlePlaceOrderClick = this.handlePlaceOrderClick.bind(this);
    }

// F1 collects name, email, and password for account creation.
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// F3 collects credit card #, expiry date, CVV, and billing zip code.

    handleCheckoutClick() {
        this.setState({
            checkingOut: false,
            f1: true
        });
    }

    handleF1Next() {
        this.setState({
            f1: false,
            f2: true
        });
    }

    handleF2Next() {
        this.setState({
            f2: false,
            f3: true
        })
    }

    handleF3Next() {
        this.setState({
            f3: false,
            confirmationPage: true
        })
    }

    handlePlaceOrderClick() {
        // return back to home
        alert('Thanks for shopping!');
        this.setState({
            confirmationPage: false,
            checkingOut: true
        })
    }

    render() {
        return (
            <div>
                {this.state.checkingOut ? <h1>continue shopping or checkout below</h1> : ''}
                {this.state.checkingOut ? <button onClick={this.handleCheckoutClick}>checkout</button> : ''}
                {this.state.f1 ? <Form1 handleF1Next={this.handleF1Next} /> : ''}
                {this.state.f2 ? <Form2 handleF2Next={this.handleF2Next} /> : ''}
                {this.state.f3 ? <Form3 handleF3Next={this.handleF3Next}/> : ''}
                {this.state.confirmationPage ? <Confirmation handlePlaceOrderClick={this.handlePlaceOrderClick} /> : ''}
            </div>

        );
    }
}

export default App;

