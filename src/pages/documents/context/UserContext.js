import React from 'react'


// const UserContext = React.createContext()
// Set Default Value
const UserContext = React.createContext("Web Developer")

const UserProvider = UserContext.Provider

const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

export default UserContext