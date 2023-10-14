import React, { Component } from 'react'

class XClassCountOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }
    componentDidMount() {
        document.title = `Cliked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Updating document title.')
            document.title = `Cliked ${this.state.count} times`
        }
    }
    render() {
        return (
            <>
                <div className='mb-1'>
                    <input
                        type="text"
                        name='title'
                        value={this.state.name}
                        onChange={(e) => {
                            this.setState({ name: e.target.value })
                        }}
                        placeholder="Title"
                        className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
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

export default XClassCountOne