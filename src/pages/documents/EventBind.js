import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    state = {
        message: "Hello world"
    }

    // onClickHandler() {
    //     this.setState({
    //         message: "Goodbye!"
    //     })

    //     console.log(this)
    // }

    onClickHandler = () => {
        this.setState({
            message: "Goodbye!"
        })
    }




    render() {
        return (
            <>
                <span>{this.state.message}</span>
                <br />
                {/* <button onClick={this.onClickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.onClickHandler()}>Click</button> */}
                <button onClick={this.onClickHandler}>Click</button>
            </>
        );
    }
}

export default EventBind;