import React from 'react'
import { useNavigate } from 'react-router-dom';
import XCounter from './XCounter';

// *Summary
// To summarize, 
// the main difference between useCallback and useMemo is the type of value they return. 
// useCallback returns a memoized callback function, while useMemo returns a memoized value. 
// Both hooks can be used to optimize the performance 
// of your React components by avoiding unnecessary re-creations of functions or values.
// *Link for description
// https://dev.to/ahmedgmurtaza/react-performance-optimization-usememo-vs-usecallback-2p2a

// https://www.youtube.com/watch?v=qySZIzZvZOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=70

function UseMemoHooks() {
    const navigate = useNavigate()
    return (
        <>
            <h1 className='text-2xl mb-1'>useMemo Hook</h1>
            <XCounter />
        </>
    )
}

export default UseMemoHooks