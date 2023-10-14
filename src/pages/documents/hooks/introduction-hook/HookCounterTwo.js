import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <>
            <h1 className='text-lg text-blue-500 font-semibold'>Count: {count}</h1>
            <button
                onClick={() => setCount(initialCount)}
                className="rounded-md bg-gray-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                Reset
            </button>
            <button
                onClick={() => setCount(prevCount => prevCount + 1)}
                className="rounded-md bg-emerald-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                Increment
            </button>
            <button
                onClick={() => setCount(prevCount => prevCount - 1)}
                className="rounded-md bg-red-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                Decrement
            </button>
            <button
                onClick={incrementFive}
                className="rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                Increment 5
            </button>
        </>
    )
}

export default HookCounterTwo