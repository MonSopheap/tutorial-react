import React from 'react'

function HeroComponent({ heroName }) {
    if (heroName === 'Joker') {
        throw new Error('Not a hero!')
    }
    return (
        <>
            <div className='text-center'>
                <div>{heroName}</div>
            </div>
        </>
    )
}

export default HeroComponent