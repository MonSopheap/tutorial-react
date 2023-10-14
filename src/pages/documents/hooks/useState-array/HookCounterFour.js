import React, { useState } from 'react'

function HookCounterFour() {
    const [items, setItem] = useState([])

    const addItem = () => {
        setItem([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])

    }


    return (
        <>
            <div>
                <button
                    onClick={addItem}
                    className="
                        rounded-md 
                        bg-gray-500 
                        px-3 
                        py-1.5 
                        text-sm 
                        font-semibold 
                        leading-6 
                        text-white 
                        shadow-sm 
                        mt-1 
                        mb-1">
                    Add a number
                </button>
                <ul>
                    {
                        items.length ? items.map(item => {
                            return <li key={item.id}>{item.value}</li>
                        }) : null
                    }
                </ul>
            </div>
        </>
    )
}

export default HookCounterFour