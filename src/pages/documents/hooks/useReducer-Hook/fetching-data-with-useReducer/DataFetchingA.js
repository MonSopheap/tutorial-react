import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingA() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1e").then((response) => {
            console.log(response)
            setLoading(false)
            setPost(response.data)
            setError('')
        }).catch((error) => {
            console.log(error)

            setLoading(false)
            setPost({})
            setError("Something weng wrong!")
        })
    }, [])

    return (
        <>
            <h1 className='text-2xl'>Fetching data with useReducer Part 1</h1>
            {loading ? 'Loading...' : <div>{post.id} {post.title}</div>}
            {error ? error : null}
        </>
    )
}

export default DataFetchingA