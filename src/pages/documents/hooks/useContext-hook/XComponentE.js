import React, { useContext } from 'react'
import { XChannelContext, XUserContext } from '.'
import XComponentF from './XComponentF'

function XComponentE() {
    const user = useContext(XUserContext)
    const channel = useContext(XChannelContext)

    return (
        <>
            {user} - {channel}
            <br />
            <XComponentF />
        </>
    )
}

export default XComponentE