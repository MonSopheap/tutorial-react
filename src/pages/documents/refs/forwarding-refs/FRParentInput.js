import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentInput extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div className='mt-2 text-center'>
                <h1 className='text-2xl mb-1'>Forwarding Refs</h1>
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler} className="ml-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput