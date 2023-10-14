import React, { Component } from "react"
import { XChannelContext, XUserContext } from "."

export class XComponentF extends Component {
    render() {
        return (
            <>
                <h1 className='text-2xl mb-1'>useContext Hook</h1>
                <XUserContext.Consumer>
                    {
                        (username) => {
                            return (
                                <XChannelContext.Consumer>
                                    {
                                        channel => {
                                            return (
                                                <div>
                                                    <span>User context value is - <label className='text-green-500 font-semibold'>{username}</label></span>
                                                    <br />
                                                    <span>Channel context value is - <label className='text-green-500 font-semibold'>{channel}</label></span>
                                                </div>
                                            )
                                        }
                                    }
                                </XChannelContext.Consumer>
                            )
                        }
                    }
                </XUserContext.Consumer>
            </>
        )
    }
}

export default XComponentF