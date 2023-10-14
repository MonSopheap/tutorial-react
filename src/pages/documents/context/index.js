import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserProvider } from './UserContext'

// Context
// 1. Create the context
// 2. Provide a context value
// 3. Consume the context value

export class ContextComponent extends Component {
    render() {
        return (
            <>
                <UserProvider value="Chen Yang">
                    <div className='text-center'>
                        <h1 className='text-2xl mb-1'>Context</h1>
                        <ComponentC />
                    </div>
                </UserProvider>
            </>
        )
    }
}

export default ContextComponent