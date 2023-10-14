import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })

    }
    render() {
        return (

            <>
                <button
                    onClick={this.incrementCount}
                    className="
                        rounded-md 
                        bg-gray-500 
                        px-3 
                        py-1.5 
                        text-sm 
                        font-semibold 
                        leading-6 
                        text-white 
                        shadow-sm 
                        mt-1 
                        mb-1">
                    Count <label className='font-semibold'>{this.state.count}</label>
                </button>
            </>
        )
    }
}

export default ClassCounter