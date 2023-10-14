import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something weng wrong!'
            }
        default:
            return state
    }
}


function DataFetchingB() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1333").then((response) => {
            console.log(response)
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: response.data,
            })
        }).catch((error) => {
            console.log(error)

            dispatch({
                type: 'FETCH_ERROR',
            })
        })
    }, [])



    return (
        <>
            <h1 className='text-2xl'>Fetching data with useReducer Part 2</h1>
            {state.loading ? 'Loading...' : <div>{state.post.id} {state.post.title}</div>}
            {state.error ? state.error : null}
        </>
    )
}

export default DataFetchingB