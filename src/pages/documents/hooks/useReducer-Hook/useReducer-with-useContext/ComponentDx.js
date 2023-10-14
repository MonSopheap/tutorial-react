import React, { useContext } from 'react'
import { CountContext } from '.'

function ComponentDx() {
    const countContext = useContext(CountContext)
    return (
        <>
            <h1 className='text-md'>Component Dx</h1>
            <div>
                <button
                    onClick={() => countContext.countDispatch('reset')}
                    className="rounded-md bg-gray-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                    Reset
                </button>
                <button
                    onClick={() => countContext.countDispatch('increment')}
                    className="rounded-md bg-emerald-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                    Increment
                </button>
                <button
                    onClick={() => countContext.countDispatch('decrement')}
                    className="rounded-md bg-red-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                    Decrement
                </button>
            </div>
        </>
    )
}

export default ComponentDx