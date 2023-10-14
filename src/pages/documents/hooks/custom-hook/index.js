import React, { useState } from 'react'
import DocumentTitleHook from './DocumentTitle'
import UseDocumentTitle from './UseDocumentTitle'

function CustomHooks() {
    const [count, setCount] = useState(0)

    UseDocumentTitle(count)

    return (
        <>
            <h1 className='text-2xl mb-1'>Custom Hook</h1>
            <div>
                <button
                    onClick={() => setCount(count + 1)}
                    className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm mt-1 mb-1">
                    Click Counter - <label className='font-semibold'>{count}</label> times
                </button>
            </div>
            <div>
                <DocumentTitleHook />
            </div>
        </>
    )
}

export default CustomHooks