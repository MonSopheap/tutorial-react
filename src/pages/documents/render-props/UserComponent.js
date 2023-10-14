import React, { Component } from 'react'

export class UserComponent extends Component {
    render() {
        return (
            <>
                <div><label className='text-green-500 font-semibold'>{this.props.render(true)}</label></div>
            </>
        )
    }
}

export default UserComponent