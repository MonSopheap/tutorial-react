import React, { Component, PureComponent } from 'react'
import MyPureComponent from './MyPureComponent'
import RegularComponent from './RegularComponent'

// PureComponent Shallow Comparison for render
export class XParentComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: "Sophana Kim"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Sophana Kim"
            })
        }, 2000)
    }

    render() {
        console.log('*** Parent Component Render ***')
        return (
            <div className='text-center'>
                <h1 className='text-2xl mb-1'>Pure Component</h1>
                <RegularComponent name={this.state.name} />
                <MyPureComponent name={this.state.name} />
            </div>
        )
    }
}

export default XParentComponent