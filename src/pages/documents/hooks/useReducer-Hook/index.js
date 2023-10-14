import React from 'react'
import FetchingDataWithUseReducer from './fetching-data-with-useReducer'
import UseCounterThree from './multiple-useReducers/CounterThree'
import UseReducerWithContext from './useReducer-with-useContext'

// useReducer Hook
// *useReducer is a hook that is used for state management
// It is an alternative to useState 
// *What's the difference?
// useState is build using useReducer
// *When to useReducer vs useState

// Hooks so far
// useState - state
// useEffect - side effects
// useContext - context API
// useReducer - reducer

// reduce vs useReducer
// *JavaScript
// array.reduce(reducer, initialValue)
// singleValue = reducer(accumulator, itemValue)
// *reduce method returns a single value

// useReducer in React
// useReducer(reducer, initialState)
// newState = reducer(currentState, action)
// useReducer returns a pair of values. [newState, dispatch]


function UseReducerHooks() {
    return (
        <>
            {/* <UseCounterOne /> */}
            {/* <UseCounterTwo /> */}
            {/* <UseCounterThree /> */}
            {/* <UseReducerWithContext /> */}
            <FetchingDataWithUseReducer />
        </>
    )
}

export default UseReducerHooks