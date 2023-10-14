import React, { Component } from 'react';
import LifecycleB from './LifecycleB';


class LifecycleA extends Component {
    constructor(props) {
        super(props)
        console.log("LifecycleA constructor")
    }

    state = {
        name: 'Duong Dara'
    }


    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount")
    }


    render() {
        console.log('LifecycleA render')
        return (
            <>
                <div className='text-center'>
                    <h1 className='text-2xl mb-1'>Mounting Lifecycle Method</h1>
                    <h1>Lifecycle A</h1>
                    <LifecycleB />
                </div>
            </>
        );
    }
}

export default LifecycleA;