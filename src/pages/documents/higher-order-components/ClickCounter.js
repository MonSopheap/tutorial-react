import React, { Component } from 'react';
import withCounter from './WithCounter';

export class ClickCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <button
                onClick={incrementCount}
                className="rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">
                <label className='text-green-500'>{this.props.name} ~ </label>
                Clicked <label className='text-red-500'>{count}</label> times
            </button>
        )
    }
}

export default withCounter(ClickCounter, 5)