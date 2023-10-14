import React, { Component } from 'react'
import MemoComponent from './MemoComponent'

export class ParentMemoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Sophana Kim"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Sophana Kim"
            })
        }, 2000)
    }

    render() {
        console.log('✅.Parent Memo Component Render')
        return (
            <div className='text-center'>
                <h1 className='text-md font-semibold leading-6 text-gray-900'>ParentMemo Component</h1>
                <MemoComponent name={this.state.name} />
            </div>
        )
    }
}

export default ParentMemoComponent