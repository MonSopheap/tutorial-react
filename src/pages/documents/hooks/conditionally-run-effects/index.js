import React, { Component } from 'react'
import XClassCountOne from './XClassCountOne'
import XHookCounterOne from './XHookCounterOne'


// useEffect Hook
// *The Effect Hook lets you perform Side Effects in Functional Components
// *It is a close replacement for [componentDidMount, componentDidUpdate and componentWillUnmount]
// 
export class XUseEffectHook extends Component {
    render() {
        return (
            <>
                <div className='text-center'>
                    <h1 className='text-2xl mb-1'>X useEffect Hook</h1>
                    {/* <XClassCountOne /> */}
                    <XHookCounterOne />
                </div>
            </>
        )
    }
}

export default XUseEffectHook