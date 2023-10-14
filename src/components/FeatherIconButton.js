import React, { useRef, useState } from 'react'
import { Facebook } from 'react-feather'

function FeatherIconButton({ children, text, color, ...props }) {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    return (
        <>
            <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`flex m-auto p-2 items-center rounded-md text-white ${color || "bg-blue-500"}`}  {...props}>
                {children ? children : <Facebook size={20} />}
                <div style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }} className='overflow-x-hidden transaction-all duration-300 ease-out'>
                    <span ref={ref} className='px-1.5'>{text ? text : `Facebook`}</span>
                </div>

            </button>
        </>
    )
}

export default FeatherIconButton