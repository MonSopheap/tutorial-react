import React, { Component } from 'react'
import ClassCountOne from './ClassCountOne'
import HookCounterOne from './HookCounterOne'


// useEffect Hook
// *The Effect Hook lets you perform Side Effects in Functional Components
// *It is a close replacement for [componentDidMount, componentDidUpdate and componentWillUnmount]
// 
export class UseEffectHook extends Component {
    render() {
        return (
            <>
                <h1 className='text-2xl mb-1'>useEffect Hook</h1>
                {/* <ClassCountOne /> */}
                <HookCounterOne />
            </>
        )
    }
}

export default UseEffectHook