import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();

        console.log(this.state)

        axios.post("https://jsonplaceholder.typicode.com/posts", this.state).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        const { userId, title, body } = this.state
        return (
            <>
                <div className='m-3 text-center'>
                    <form onSubmit={this.submitHandler}>

                        <div className='mt-3 mb-1'>
                            <input
                                type="text"
                                name='userId'
                                value={userId}
                                onChange={this.onChangeHandler}
                                placeholder="UserId"
                                className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div className='mb-1'>
                            <input
                                type="text"
                                name='title'
                                value={title}
                                onChange={this.onChangeHandler}
                                placeholder="Title"
                                className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div className='mb-1'>
                            <input
                                type="text"
                                name='body'
                                value={body}
                                placeholder="Body"
                                onChange={this.onChangeHandler}
                                className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <button type='submit' className="rounded-md bg-indigo-600 px-3 py-1.5 ring-1 text-sm font-semibold leading-6 text-white shadow-sm mt-1 mb-1">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default PostForm