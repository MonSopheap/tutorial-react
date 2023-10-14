import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

// Methods as props

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.greetParent = this.greetParent.bind(this);
    }
    state = {
        parnetName: "Parent"
    }


    greetParent(childName) {
        alert(`Hello ${this.state.parnetName} from ${childName}`);
    }
    render() {
        return (
            <>
                <ChildComponent greetHandler={this.greetParent} />
            </>
        );
    }
}

export default ParentComponent;