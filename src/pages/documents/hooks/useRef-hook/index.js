import React, { useRef, useEffect } from 'react'
import ClassTimer from './ClassTimer'
import HookTimer from './HookTimer'

function UseRefHooks() {
    // Part1
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])


    return (
        <>
            <div className='p-2 mb-1'>
                <label>Input </label>
                <input type="text" ref={inputRef} value="" className='border rounded-md p-2 focus:border-indigo-500 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'></input>
            </div>
            <ClassTimer />
            <div className='mt-1'>
                <HookTimer />
            </div>
        </>
    )
}

export default UseRefHooks