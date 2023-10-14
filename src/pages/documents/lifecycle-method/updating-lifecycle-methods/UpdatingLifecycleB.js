import React, { Component } from 'react';


class UpdatingLifecycleB extends Component {
    constructor(props) {
        super(props)
        console.log("LifecycleB constructor")
    }

    state = {
        name: 'Vichera'
    }

    // execute1
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log("*LifecycleB componentDidMount")
    }
    // execute2
    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate")
        return true
    }

    // execute4
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }

    // execute5
    componentDidUpdate() {
        console.log("*LifecycleB componentDidUpdate")
    }


    render() {
        // execute3
        console.log('LifecycleB render')
        return (
            <>
                <div className='text-center'>
                    <h1 className='text-2md font-bold leading-9'>UpdatingLifecycle B</h1>
                </div>

            </>
        );
    }
}

export default UpdatingLifecycleB;