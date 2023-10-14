import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }


    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener("mousemove", logMousePosition)

        // Add this inside useEffect for CleanUp code
        return () => {
            console.log("Component unmounting code")
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])


    return (
        <>
            Hook X - <label className='text-blue-500 font-bold'>{x}</label>, Y - <label className='text-green-500 font-bold'>{y}</label>
        </>
    )
}

export default HookMouse