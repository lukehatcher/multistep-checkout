import React from 'react';

class Form3 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>credit card #:</label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label>expiration date:</label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label>CVV:</label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label>billing zipcode:</label>
                        <input type="text"></input>
                    </div>
                </form>
                <button onClick={this.props.handleF3Next}>next</button>
            </div>
        );
    }
}

// F3 collects credit card #, expiry date, CVV, and billing zip code.

export default Form3;


// const Fomr3 = (props) => {
//     return {
//         // do things
//     }
// }