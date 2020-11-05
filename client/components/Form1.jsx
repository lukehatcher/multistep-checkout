import React from 'react';

class Form1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameInput: '',
            emailInput: '',
            passwordInput: ''
        }
        // this.handleTextInput = this.handleTextInput.bind(this);
    }

    // handleNameInput(e) {
    //     this.setState({
    //         nameInput: e.target.value
    //     });
    // }

    // handleEmailInput(e) {
    //     this.setState({
    //         emailInput: e.target.value
    //     })
    // }

    // handlePasswordInput(e) {
    //     this.setState({
    //         passwordInput: e.target.value
    //     })
    // }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>full name:</label>
                        <input type="text" onChange={this.handleNameInput}></input>
                    </div>

                    <div>
                        <label>email:</label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label>password:</label>
                        <input type="text"></input>
                    </div>
                </form>
                {/* handleF1Next also needs to setstate and query db*/}
                <button onClick={this.props.handleF1Next}>next</button>
            </div>
        );
    }
}


export default Form1;

// F1 collects name, email, and password for account creation.

// const Form1 = (props) => {
//     return {
//         // do things
//     }
// }

