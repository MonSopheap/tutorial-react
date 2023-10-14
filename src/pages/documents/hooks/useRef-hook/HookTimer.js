import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
            Hook Timer - <label className='text-blue-500 font-semibold'>{timer}</label>
            <div className='mt-1'>
                <button
                    onClick={() => clearInterval(intervalRef.current)}
                    className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm mt-1 mb-1">
                    Clear Hook Timer
                </button>
            </div>
        </div>
    )
}

export default HookTimer