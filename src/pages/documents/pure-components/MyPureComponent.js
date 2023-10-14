import React, { PureComponent } from 'react'

export class MyPureComponent extends PureComponent {
    render() {
        console.log("Pure Compo render")
        return (
            <div className='text-center text-sm font-semibold leading-6 text-blue-500'>
                Pure Component: {this.props.name}
            </div>
        )
    }
}

export default MyPureComponent