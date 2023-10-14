import React from 'react'

function ButtonComponent({ handleClick, children }) {
    console.log(`Rendering button - ${children}`)
    return (
        <>
            <button
                onClick={handleClick}
                className="rounded-md bg-cyan-500 px-3 mr-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                {children}
            </button>
        </>
    )
}

export default React.memo(ButtonComponent)