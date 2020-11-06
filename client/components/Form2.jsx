import React from 'react';

class Form2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            line1Input: '',
            line2INput: '',
            cityInput: '',
            stateInput: '',
            zipcodeInput: '',
            phonenumberInput: ''
        };
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(e, stateName) {
        let input = e.target.value;
        this.setState({
            [stateName]: input
        });
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>shipping adress line 1:</label>
                        <input
                        type="text"
                        onChange={(e) => {
                            this.handleFormChange(e, 'line1Input');
                        }}
                        />
                    </div>

                    <div>
                        <label>line 2:</label>
                        <input
                        type="text"
                        onChange={(e) => {
                            this.handleFormChange(e, 'line2Input');
                        }}
                        />
                    </div>

                    <div>
                        <label>city:</label>
                        <input
                        type="text"
                        onChange={(e) => {
                            this.handleFormChange(e, 'cityInput');
                        }}
                        />
                    </div>

                    <div>
                        <label>state:</label>
                        <input
                        type="text"
                        onChange={(e) => {
                            this.handleFormChange(e, 'stateInput');
                        }}
                        />
                    </div>

                    <div>
                        <label>zipcode:</label>
                        <input
                        type="text"
                        onChange={(e) => {
                            this.handleFormChange(e, 'zipcodeInput');
                        }}
                        />
                    </div>

                    <div>
                        <label>phone number:</label>
                        <input
                        type="text"
                        onChange={(e) => {
                            this.handleFormChange(e, 'phonenumberInput');
                        }}
                        />
                    </div>

                </form>
                <button onClick={() => {
                    let f2Data = {
                        line1: this.state.line1Input,
                        line2: this.state.line2INput,
                        city: this.state.cityInput,
                        state: this.state.stateInput,
                        zipcode: this.state.zipcodeInput,
                        cell: this.state.phonenumberInput
                    };
                    this.props.handleF2Next(f2Data);
                }}>next</button>
            </div>
        );
    }
}

export default Form2;