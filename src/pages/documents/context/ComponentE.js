import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

export class ComponentE extends Component {
    static contextType = UserContext
    render() {
        return (
            <>
                <div>Component E Context <label className='font-semibold'>{this.context}</label></div>
                <ComponentF />
            </>
        )
    }
}


export default ComponentE