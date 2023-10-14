import React, { Component } from 'react';


class LifecycleB extends Component {
    constructor(props) {
        super(props)
        console.log("LifecycleB constructor")
    }

    state = {
        name: 'Vichera'
    }


    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount")
    }


    render() {
        console.log('LifecycleB render')
        return (
            <>
                <div className='text-center'><h1>Lifecycle B</h1></div>
            </>
        );
    }
}

export default LifecycleB;