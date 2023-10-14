import React, { Component } from 'react';


class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <>
                <div className='text-center'>
                    <h1 className='text-blue-600'>Welcome: {this.props.name} {this.props.heroName}</h1>
                </div>
            </>
        );
    }
}

export default Welcome;