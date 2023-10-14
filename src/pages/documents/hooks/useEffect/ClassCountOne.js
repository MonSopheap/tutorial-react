import React, { Component } from 'react'

class ClassCountOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        document.title = `Cliked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        document.title = `Cliked ${this.state.count} times`
    }
    render() {
        return (
            <>
                <button
                    onClick={() => this.setState({ count: this.state.count + 1 })}
                    className="
                        rounded-md 
                        bg-sky-500 
                        px-3 
                        py-1.5 
                        text-sm 
                        leading-6 
                        text-white 
                        shadow-sm
                        mr-1
                        mt-1 
                        mb-1">
                    Click <label className='font-semibold'>({this.state.count})</label> times
                </button>
            </>
        )
    }
}

export default ClassCountOne