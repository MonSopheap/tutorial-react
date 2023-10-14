import React, { Component } from 'react';
import UpdatingLifecycleB from './UpdatingLifecycleB';


class UpdatingLifecycleA extends Component {
    constructor(props) {
        super(props)
        console.log("LifecycleA constructor")
    }

    state = {
        name: 'Duong Dara'
    }

    // execute1
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log("*LifecycleA componentDidMount")
    }

    // execute2
    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }

    // execute4
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    // execute5
    componentDidUpdate() {
        console.log("*LifecycleA componentDidUpdate")
    }

    // OnChange
    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

    render() {
        // execute3
        console.log('LifecycleA render')
        return (
            <>
                <div className='text-center'>
                    <h1 className='text-2xl mb-1'>Mounting Lifecycle Method</h1>
                    <h1 className='text-2md font-bold leading-9'>UpdatingLifecycle A</h1>
                    <button
                        onClick={this.changeState}
                        className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">Change state</button>
                    <UpdatingLifecycleB />
                </div>
            </>
        );
    }
}

export default UpdatingLifecycleA;