import React from 'react';
import Confirmation from './Confirmation.jsx';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import axios from 'axios';

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

        this.fetchUserInfo = this.fetchUserInfo.bind(this);
    }

    handleCheckoutClick() {
        this.setState({
            checkingOut: false,
            f1: true
        });
    }

    handleF1Next(f1Data) {
        // param f1Data: obj with name, email, and pass props
        this.setState({
            f1: false,
            f2: true,
            name: f1Data.name,
            email: f1Data.email,
            password: f1Data.password
        });
    }

    handleF2Next(f2Data) {
        this.setState({
            f2: false,
            f3: true,
            line1: f2Data.line1,
            line2: f2Data.line2,
            city: f2Data.city,
            state: f2Data.state,
            zipcode: f2Data.zipcode,
            cell: f2Data.cell,
        });
    }

    handleF3Next(f3Data) {
        this.setState({
            f3: false,
            confirmationPage: true,
            ccnumb: f3Data.ccnumb,
            expdate: f3Data.expdate,
            cvv: f3Data.cvv,
            billzip: f3Data.billzip
        }, () => {
            let dataObj = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                line1: this.state.line1,
                line2: this.state.line2,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode,
                cell: this.state.cell,
                ccnumb: this.state.ccnumb,
                expdate: this.state.expdate,
                cvv: this.state.cvv,
                billzip: this.state.billzip
            };
            axios.post('/shop', dataObj)
                .then(() => {
                    console.log('data should be saved');
                    this.fetchUserInfo();
                    // ################
                    // POST IT NOT
                    // ################
                })
                .catch((err) => {
                    console.log('err in client post req', err);
                })
        });
    }

    fetchUserInfo() {
        let url = `/shop/${this.state.name}`;
        axios.get(url)
            .then((response) => {
                console.log('res cliet data', response);
            })
            .catch((err) => {
                console.log('err in client get req: ', err);
            })
    }

    handlePlaceOrderClick() {
        // return back to home
        alert('Thanks for shopping!');
        this.setState({
            confirmationPage: false,
            checkingOut: true
        });
    }

    render() {
        console.log('just re redered', this.state);
        return (
            <div>
                {this.state.checkingOut ? <h1>continue shopping or checkout below</h1> : ''}
                {this.state.checkingOut ? <button onClick={this.handleCheckoutClick}>checkout</button> : ''}
                {this.state.f1 ? <Form1 handleF1Next={this.handleF1Next} /> : ''}
                {this.state.f2 ? <Form2 handleF2Next={this.handleF2Next} /> : ''}
                {this.state.f3 ? <Form3 handleF3Next={this.handleF3Next}/> : ''}
                {this.state.confirmationPage ? <Confirmation handlePlaceOrderClick={this.handlePlaceOrderClick} name={this.state.name} /> : ''}
            </div>

        );
    }
}

export default App;

