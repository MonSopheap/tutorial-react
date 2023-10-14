import React, { Component } from 'react'

export class RegularComponent extends Component {
    render() {
        // Always re-rendered no Check object
        console.log("Regular Compo render")
        return (
            <div className='text-sm font-semibold leading-6 text-green-500'>Regular Component: {this.props.name}</div>
        )
    }
}

export default RegularComponent