import React, { Component } from 'react'
import axios from 'axios'


class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            console.log(response)

            this.setState({
                posts: response.data
            })

        }).catch((error) => {
            console.log(error)

            this.setState({
                errorMsg: "Error retreiving data"
            })
        })
    }
    render() {
        const { posts, errorMsg } = this.state
        return (
            <>
                <div className='text-center'>
                    <h1 className='text-lg'>List of Posts</h1>
                    {
                        posts.length ? posts.map(post => <div>{post.id}.{post.title}</div>) : null
                    }
                    {
                        errorMsg ? <div className='text-red-500'>{errorMsg}</div> : null
                    }
                </div>
            </>
        )
    }
}

export default PostList