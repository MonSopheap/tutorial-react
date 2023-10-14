import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount() {
        window.addEventListener("mousemove", this.logMousePosition)
    }

    // Unmount
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <>
                X - <label className='text-blue-500 font-bold'>{this.state.x}</label>, Y - <label className='text-green-500 font-bold'>{this.state.y}</label>
            </>
        )
    }
}

export default ClassMouse