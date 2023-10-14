import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

function MainHigherOrder() {
    return (
        <>
            <div className='text-center'>
                <h1 className='text-2xl mb-1'>Higher Order Component</h1>
                <ClickCounter name="Mr Mouse" />
                <HoverCounter />
            </div>
        </>
    )
}

export default MainHigherOrder