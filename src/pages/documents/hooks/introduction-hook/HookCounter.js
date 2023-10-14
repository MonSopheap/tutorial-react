import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)
    return (
        <>
            <button
                onClick={() => setCount(count + 1)}
                className="
                        rounded-md 
                        bg-gray-500 
                        px-3 
                        py-1.5 
                        text-sm 
                        font-semibold 
                        leading-6 
                        text-white 
                        shadow-sm 
                        mt-1 
                        mb-1">
                Count <label className='font-semibold'>{count}</label>
            </button>
        </>
    )
}

export default HookCounter