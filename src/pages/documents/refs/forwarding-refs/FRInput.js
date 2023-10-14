import React from 'react'

// function FRInput() {
//     return (
//         <input
//             ref={this.inputRef}
//             type="text"
//             className="rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         />
//     )
// }

const FRInput = React.forwardRef((props, ref) => {
    return (
        <>
            <input
                ref={ref}
                type="text"
                className="rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
        </>
    )
})

export default FRInput