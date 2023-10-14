import React, { Component } from 'react';



class MyMessage extends Component {
    constructor() {
        super();
    }

    state = {
        message: 'Welcome Visitor'
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing',
        });
    }
    render() {
        return (
            <>
                <div>
                    <h2>{this.state.message}</h2>
                    <button onClick={() => this.changeMessage()}>Subscribe</button>
                </div>
            </>
        );
    }
}

export default MyMessage;