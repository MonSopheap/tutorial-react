import React from 'react'

function MemoComponent({ name }) {
    console.log("Rendering Memo Component")
    return (
        <div>MemoComponent</div>
    )
}

export default React.memo(MemoComponent)