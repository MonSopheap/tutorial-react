import React, { useReducer } from 'react'

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

function UseCounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h1 className='text-2xl'>useReducer (simple state & action) Part 1</h1>
            <h5 className='text-md font-semibold text-gray-500'> Count : {count}</h5>
            <button
                onClick={() => dispatch('reset')}
                className="rounded-md bg-gray-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                Reset
            </button>
            <button
                onClick={() => dispatch('increment')}
                className="rounded-md bg-emerald-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                Increment
            </button>
            <button
                onClick={() => dispatch('decrement')}
                className="rounded-md bg-red-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                Decrement
            </button>
        </>
    )
}

export default UseCounterOne