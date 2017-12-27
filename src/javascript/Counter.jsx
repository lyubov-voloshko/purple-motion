/**
 * Created by macbook11 on 11/12/17.
 */
import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    render() {
        const styles = {
            background: '#3e0694',
            color: '#ffffff',
            padding: '10px 20px',
            border: '1px solid #7851A9',
            'border-radius': '5px',
            'box-shadow': '1px 1px 2xp 2px rgba(0, 0, 0, 0.25)'
        }

        return (<button style={styles} onClick={() => {this.setState({ count: this.state.count + 3 });}}>
            Count: {this.state.count}
        </button>);
    }
}
export default Counter;