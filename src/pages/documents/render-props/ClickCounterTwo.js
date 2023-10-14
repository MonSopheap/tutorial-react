import React, { Component } from 'react'

export class ClickCounterTwo extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <>
                <button
                    onClick={incrementCount}
                    className="rounded-md bg-cyan-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                    Clicked <label className='text-red-500'>{count}</label> times
                </button>
            </>
        )
    }
}

export default ClickCounterTwo