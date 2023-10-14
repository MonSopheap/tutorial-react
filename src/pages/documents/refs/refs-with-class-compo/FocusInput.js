import React, { Component } from 'react'
import InputCompo from './InputCompo'

export class FocusInput extends Component {
    constructor(props) {
        super(props)

        this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div className='text-center mt-2'>
                {/* Children Component */}
                <InputCompo ref={this.componentRef} />
                <button onClick={this.clickHandler} className="ml-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">Focus Input</button>
            </div>
        )
    }
}

export default FocusInput