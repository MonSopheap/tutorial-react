import React, { useState, useEffect } from 'react'

function XHookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log(`useEffect - Updatiing document title`)
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <>
            <div className='mb-1'>
                <input
                    type="text"
                    name='title'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    placeholder="Title"
                    className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
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

export default XHookCounterOne