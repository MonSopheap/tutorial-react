import React, { Component } from 'react'
import CustomHooks from './custom-hook'
import FetchingDataUseEffect from './fetching-data-useEffect1'
import UseCallBackHook from './useCallback-hook'
import XUseContextHooks from './useContext-hook'
import UseEffectHookCleanUp from './useEffect-with-cleanup'
import UseEffectHookIncorrectDependency from './useEffect-with-incorrect-dependency'
import UseMemoHooks from './useMemo-hook'
import UseReducerHooks from './useReducer-Hook'
import UseRefHooks from './useRef-hook'


// Summary - useState
// *The useState hooks lets you add state to functional components
// *In classes, the state is always an object
// *With the useState hook, the state doesn't have to be an Object, It can be an array, a boolean, a number, a string, etc.
// *The useState hook returns an array with 2 elements.
// => The first element is the current value of the state, and seconde element is a state setter function.
// *New state value depends on the previous state value? You can pass the function setter function.
// *Finally, when dealing with objects or arrays, always make sure to spread your state variable and then call the setter function.


// Rules of hooks
// *Only Call Hooks at the top level
// Don't Call Hooks inside loops, conditions or nested functions
// *Only Call Hooks from React Function
// Call them from within React functional components and not just any regular javaScript function

export class ReactHooks extends Component {
    render() {
        return (
            <>
                <div className='text-center'>
                    {/* <ClassCounter /> */}
                    {/* <HookCounter /> */}
                    {/* <HookCounterTwo /> */}
                    {/* <HookCounterThree /> */}
                    {/* <HookCounterFour /> */}

                    {/**** useEffect Hook */}
                    {/* <UseEffectHook /> */}
                    {/* <XUseEffectHook /> */}
                    {/* <RunEffectHookOnlyOnce /> */}
                    {/* <UseEffectHookCleanUp /> */}
                    {/* <UseEffectHookIncorrectDependency /> */}
                    {/* <FetchingDataUseEffect /> */}
                    {/* <XUseContextHooks /> */}
                    {/* <UseReducerHooks /> */}
                    {/* <UseCallBackHook /> */}
                    {/* <UseMemoHooks /> */}
                    {/* <UseRefHooks /> */}
                    <CustomHooks />
                </div>
            </>
        )
    }
}

export default ReactHooks