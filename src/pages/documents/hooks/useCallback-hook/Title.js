import React from 'react'

function TitleComponent() {
    console.log("Rendering Title")
    return (
        <>
            <h1 className='text-2xl mb-1'>useCallback Hook</h1>
        </>
    )
}

export default React.memo(TitleComponent)