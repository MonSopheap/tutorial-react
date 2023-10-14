import React from 'react'

function Count({ text, count }) {
    console.log(`Rendering ${text}`)
    return (
        <>
            <h5 className='text-md font-semibold'> {text} : {count}</h5>
        </>
    )
}

export default React.memo(Count)