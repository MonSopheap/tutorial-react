import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching2() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
            console.log(res)
            setPost(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [id])

    return (
        <>
            <h1 className='text-2xl mb-1'>Fetching data with useEffect Part 2</h1>
            <form>
                <div className='mt-3 mb-1'>
                    <input
                        type="text"
                        name='Id'
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Id"
                        className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div><label className='font-semibold'>{post.id}</label>.{post.title}</div>
            </form>
        </>
    )
}

export default DataFetching2