import React, { Component } from 'react'
import XComponentC from './XComponentC'

// What, Why React Context
// *Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// 

export const XUserContext = React.createContext()
export const XChannelContext = React.createContext()


export class XUseContextHooks extends Component {
    render() {
        return (
            <>
                <XUserContext.Provider value={"Amazone ✅"}>
                    <XChannelContext.Provider value={"ReactJS Tutorial for Beginners ❇️"}>
                        <XComponentC />
                    </XChannelContext.Provider>
                </XUserContext.Provider>
            </>
        )
    }
}

export default XUseContextHooks