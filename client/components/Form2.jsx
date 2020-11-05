import React from 'react';

class Form2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>shipping adress line 1:</label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label>line 2:</label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label>city:</label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label>state:</label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label>zipcode:</label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label>phone number:</label>
                        <input type="text"></input>
                    </div>

                </form>
                <button onClick={this.props.handleF2Next}>next</button>
            </div>
        );
    }
}


export default Form2;

    // const Form2 = (props) => {
    //     return {
    //         // do things
    //     }
    // }