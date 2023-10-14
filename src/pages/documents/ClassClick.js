import React, { Component } from 'react';

class ClassClick extends Component {
    constructor(props) {
        super(props);
    }
    state = {}


    onClickHandler() {
        console.log("Class clicked")
    }
    render() {
        return (
            <>
                <button onClick={this.onClickHandler}>Click</button>
            </>
        );
    }
}

export default ClassClick;