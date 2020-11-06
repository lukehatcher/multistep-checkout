import React from 'react';

class Form3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ccnumbInput: '',
            expdateInput: '',
            ccvInput: '',
            billzipcodeInput: ''
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
                        <label>credit card #:</label>
                        <input
                        type="text"
                        onChange={(e) => {
                            this.handleFormChange(e, 'ccnumbInput');
                        }}
                        />
                    </div>

                    <div>
                        <label>expiration date:</label>
                        <input
                        type="text"
                        onChange={(e) => {
                            this.handleFormChange(e, 'expdateInput');
                        }}
                        />
                    </div>

                    <div>
                        <label>CVV:</label>
                        <input
                        type="text"
                        onChange={(e) => {
                            this.handleFormChange(e, 'ccvInput');
                        }}
                        />
                    </div>

                    <div>
                        <label>billing zipcode:</label>
                        <input
                        type="text"
                        onChange={(e) => {
                            this.handleFormChange(e, 'billzipcodeInput');
                        }}
                        />
                    </div>
                </form>
                <button onClick={() => {
                    let f3Data = {
                        ccnumb: this.state.ccnumbInput,
                        expdate: this.state.expdateInput,
                        cvv: this.state.ccvInput,
                        billzip: this.state.billzipcodeInput
                    };
                    this.props.handleF3Next(f3Data);
                }}>next</button>
            </div>
        );
    }
}

// F3 collects credit card #, expiry date, CVV, and billing zip code.

export default Form3;
