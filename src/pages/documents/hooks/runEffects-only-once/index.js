import React, { Component } from 'react'
import ClassMouse from './ClassMouse'
import HookMouse from './HookMouse'

// useEffect Hook
// *The Effect Hook lets you perform Side Effects in Functional Components
// *It is a close replacement for [componentDidMount, componentDidUpdate and componentWillUnmount]
// 
// How can you make useEffect only run once?
// You can pass the empty array as a second argument to useEffect hook to tackle this use case. 
// useEffect(() => {// Side Effect }, []);
// In this case, an side effect runs only once after the initial render of the component.

export class RunEffectHookOnlyOnce extends Component {
    render() {
        return (
            <>
                <div>
                    <h1 className='text-2xl mb-1'>Run effects only once</h1>
                    {/* <ClassMouse /> */}
                    <HookMouse />
                </div>
            </>
        )
    }
}

export default RunEffectHookOnlyOnce