import React, { useState } from 'react'
import HookMouse from '../runEffects-only-once/HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)


    return (
        <>
            <button
                onClick={() => setDisplay(!display)}
                className="
                        rounded-md 
                        bg-cyan-900 
                        px-3 
                        py-1.5 
                        text-sm 
                        leading-6 
                        text-white 
                        shadow-sm
                        mr-1
                        mt-1 
                        mb-1">
                Toggle Display
            </button>
            <br />
            {
                display && <HookMouse />
            }
        </>
    )
}

export default MouseContainer