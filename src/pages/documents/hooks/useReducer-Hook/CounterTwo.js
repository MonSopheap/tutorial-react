import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function UseCounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h1 className='text-2xl'>useReducer (simple state & action) Part 2</h1>
            <h5 className='text-md font-semibold text-gray-500'>First Counter : {count.firstCounter}</h5>
            <h5 className='text-md font-semibold text-blue-500'>Second Counter : {count.secondCounter}</h5>

            <div>
                <button
                    onClick={() => dispatch({ type: 'increment', value: 1 })}
                    className="rounded-md bg-cyan-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                    Increment
                </button>
                <button
                    onClick={() => dispatch({ type: 'decrement', value: 1 })}
                    className="rounded-md bg-red-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                    Decrement
                </button>
                <button
                    onClick={() => dispatch({ type: 'increment', value: 10 })}
                    className="rounded-md bg-cyan-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                    Increment 10
                </button>
                <button
                    onClick={() => dispatch({ type: 'decrement', value: 10 })}
                    className="rounded-md bg-red-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                    Decrement 10
                </button>
            </div>
            <div>
                <button
                    onClick={() => dispatch({ type: 'increment2', value: 5 })}
                    className="rounded-md bg-cyan-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                    Increment Sec Counter 5
                </button>
                <button
                    onClick={() => dispatch({ type: 'decrement2', value: 5 })}
                    className="rounded-md bg-red-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                    Decrement Sec Counters 5
                </button>
            </div>
            <button
                onClick={() => dispatch({ type: 'reset', })}
                className="rounded-md bg-gray-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                Reset
            </button>
        </>
    )
}

export default UseCounterTwo