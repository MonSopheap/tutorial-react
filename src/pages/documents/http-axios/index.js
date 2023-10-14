import React, { Component } from 'react'
import PostForm from './PostForm'
import PostList from './PostList'

export class HttpReact extends Component {
    render() {
        return (
            <div>
                <h1 className='text-2xl text-center'>Http axios</h1>
                {/* <PostList /> */}
                <PostForm />
            </div>
        )
    }
}

export default HttpReact