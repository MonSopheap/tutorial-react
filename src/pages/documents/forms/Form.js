import React, { Component } from 'react';


class FormCompoent extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        username: '',
        comments: ''
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value,
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`);
        event.preventDefault();
    }


    render() {
        return (
            <>
                <div className='p-2 text-center'>
                    <form onSubmit={this.handleSubmit}>

                        <div className='mb-1 '>
                            <input
                                type="text"
                                value={this.state.username} onChange={this.handleUsernameChange}
                                placeholder="First name"
                                className="rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                            />

                        </div>
                        <div className='mb-1'>
                            <textarea value={this.state.comments} onChange={this.handleCommentChange} placeholder="Comment" className='rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none'></textarea>
                        </div>
                        <div>
                            <label>Select </label>
                            <select value={this.state.topic} onChange={this.handleTopicChange} className='border rounded-md focus:outline-none'>

                                <option value="react">React</option>
                                <option value="angular">Angular</option>
                                <option value="vue">Vue</option>

                            </select>
                        </div>

                        <button
                            type="submit"
                            className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm mt-2 mb-1">
                            Submit
                        </button>
                    </form>
                </div>
            </>
        );
    }
}

export default FormCompoent;