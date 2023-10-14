import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()

        // CallBack Approach
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus();
        // console.log(this.inputRef)

        // CallBack Approach
        if (this.cbRef) {
            this.cbRef.focus()
        }

    }


    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div className="mt-2 text-center">
                <input
                    ref={this.inputRef}
                    type="text"
                    className="rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <input
                    ref={this.setCbRef}
                    type="text"
                    className="rounded-md ml-2 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button onClick={this.clickHandler} className="ml-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">OnClick</button>
            </div>
        )
    }
}

export default RefsDemo