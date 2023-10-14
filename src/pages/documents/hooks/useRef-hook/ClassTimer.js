import React, { Component } from 'react'

export class ClassTimer extends Component {
    interval
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                timer: prevState.timer + 1
            }))
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <>
                <div>
                    Class Timer - <label className='text-blue-500 font-semibold'>{this.state.timer}</label>
                </div>
                <div className='mt-1'>
                    <button
                        onClick={() => clearInterval(this.interval)}
                        className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm mt-1 mb-1">
                        Clear Timer
                    </button>
                </div>
            </>
        )
    }
}

export default ClassTimer