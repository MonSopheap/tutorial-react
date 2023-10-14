import { ThemeContext } from '@emotion/react'
import React, { Component } from 'react'
import UserContext, { UserConsumer } from './UserContext'

export class ComponentF extends Component {
    render() {
        return (
            <>
                <UserConsumer>
                    {
                        (username) => {
                            return <span>Hello <label className='text-green-500 font-semibold'>{username}</label></span>
                        }
                    }
                </UserConsumer>
            </>
        )
    }
}

export default ComponentF



// Consuming Multiple Contexts

// function Content(){
//     return <ThemeContext.Consumer>
//         {
//             theme=>{
//                 <UserContext.Consumer>
//                     {
//                         user=>{
//                             <ProfilePage user={user} theme={theme} />
//                         }
//                     }
//                 </UserContext.Consumer>
//             }
//         }
//     </ThemeContext.Consumer>
// }