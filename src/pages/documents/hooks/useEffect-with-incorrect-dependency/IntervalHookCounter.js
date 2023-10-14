import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    function doSomething() {
        console.log(first)
    }

    useEffect(() => {
        doSomething()
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [count])
    return (
        <>
            useEffect Hook clean up code<h5 className='text-lg font-bold text-cyan-500'>{count}</h5>
        </>
    )
}

export default IntervalHookCounter