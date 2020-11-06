import React from 'react';

class Form1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameInput: '',
            emailInput: '',
            passwordInput: ''
        }
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
                        <label>full name:</label>
                        <input
                        type="text"
                        onChange={(e) => {
                            this.handleFormChange(e, 'nameInput');
                        }}
                        />
                    </div>

                    <div>
                        <label>email:</label>
                        <input
                        type="text"
                        onChange={(e) => {
                            this.handleFormChange(e, 'emailInput');
                        }}
                        />
                    </div>

                    <div>
                        <label>password:</label>
                        <input
                        type="text"
                        onChange={(e) => {
                            this.handleFormChange(e, 'passwordInput');
                        }}
                        />
                    </div>
                </form>
                {/* handleF1Next also needs to setstate and query db*/}
                <button onClick={() => {
                    let f1Data = {
                        name: this.state.nameInput,
                        email: this.state.emailInput,
                        password: this.state.passwordInput
                    }
                    this.props.handleF1Next(f1Data);
                }}>next</button>
            </div>
        );
    }
}


export default Form1;
