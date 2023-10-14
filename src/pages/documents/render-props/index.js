import React from 'react'
import ClickCounterTwo from './ClickCounterTwo'
import CounterProps from './CounterRenderProps'
import HoverCounterTwo from './HoverCounterTwo'
import UserComponent from './UserComponent'

function MainRenderProps() {
    return (
        <>
            <div className='text-center'>
                <h1 className='text-2xl mb-1'>Render Props</h1>
                {/* <ClickCounterTwo />
                <HoverCounterTwo />
                <UserComponent render={(isLoggedIn) => isLoggedIn ? 'Hanna samurai' : 'Guest'} /> */}

                <CounterProps render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />} />
                <CounterProps render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />} />
            </div>
        </>
    )
}

export default MainRenderProps