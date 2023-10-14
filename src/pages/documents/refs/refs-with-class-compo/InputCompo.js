import React, { Component } from 'react'

export class InputCompo extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    focusInput() {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div className="mt-2 text-center">
                <input
                    ref={this.inputRef}
                    type="text"
                    className="rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        )
    }
}

export default InputCompo