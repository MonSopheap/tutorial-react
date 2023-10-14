import React from 'react'
import IntervalClassCounter from './IntervalClassCounter'
import IntervalHookCounter from './IntervalHookCounter'

function UseEffectHookIncorrectDependency() {
    return (
        <>
            <h1 className='text-2xl mb-1'>useEffect Hook with incorrect dependency</h1>
            <IntervalClassCounter />
            <IntervalHookCounter />
        </>
    )
}

export default UseEffectHookIncorrectDependency