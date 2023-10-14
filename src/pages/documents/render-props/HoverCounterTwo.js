import React, { Component } from 'react';

export class HoverCounterTwo extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <>
                <br />
                <span onMouseOver={incrementCount} className='text-1xl my-2 font-semibold hover:cursor-pointer'>
                    Hovered <label className='text-red-500 font-semibold'>{count}</label> times
                </span>
            </>
        )
    }
}

export default HoverCounterTwo