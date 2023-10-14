import React, { Component } from 'react';



class MyCounter extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        count: 0
    }

    increment() {
        // If you not use setState UI not effect new value
        // this.state.count = this.state.count + 1;

        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log("Call back value: ", this.state.count)
        // });


        this.setState(prevState => ({
            count: prevState.count + 1
        }));
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <>
                <div>
                    <h2>Count: {this.state.count}</h2>
                    <button onClick={() => this.increment()}>increment</button>
                    <br />
                    <button onClick={() => this.incrementFive()}>incrementFive</button>
                </div>
            </>
        );
    }
}

export default MyCounter;