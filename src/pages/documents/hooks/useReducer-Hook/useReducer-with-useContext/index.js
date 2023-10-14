import React, { useReducer } from 'react'
import ComponentAx from './ComponentAx'
import ComponentBx from './ComponentBx'
import ComponentCx from './ComponentCx'

// useReducer with useContext
// useReducer - Local state management
// Share state between components - Global state management
// useReducer + useContext

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function UseReducerWithContext() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
                <h1 className='text-2xl'>useReducer with useContext</h1>
                <h5 className='text-md font-semibold text-gray-500'> Count : {count}</h5>
                <ComponentAx />
                <ComponentBx />
                <ComponentCx />
            </CountContext.Provider>
        </>
    )
}

export default UseReducerWithContext