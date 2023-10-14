import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <>
            <button
                onClick={() => setCount(count + 1)}
                className="
                        rounded-md 
                        bg-indigo-500 
                        px-3 
                        py-1.5 
                        text-sm 
                        leading-6 
                        text-white 
                        shadow-sm 
                        mt-1 
                        mb-1">
                Click <label className='font-semibold'>({count})</label> times
            </button>
        </>
    )
}

export default HookCounterOne