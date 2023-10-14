import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching1() {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            console.log(res)

            setPosts(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <h1 className='text-2xl mb-1'>Fetching data with useEffect Part 1</h1>
            <h1 className='text-lg'>List of Posts</h1>
            {
                posts.length ? posts.map(post => <div key={post.id}><label className='font-semibold'>{post.id}</label>.{post.title}</div>) : null
            }
        </>
    )
}

export default DataFetching1