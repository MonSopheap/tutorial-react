import React, { useState } from 'react'

function HookCounterThree() {

    const [name, setName] = useState({ firstName: '', lastName: '' })

    return (
        <>
            <form >

                <div className='mt-3 mb-1'>
                    <input
                        type="text"
                        value={name.firstName}
                        onChange={(e) => { setName({ ...name, firstName: e.target.value }) }}
                        placeholder="First name"
                        className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name='lastName'
                        value={name.lastName}
                        onChange={(e) => { setName({ ...name, lastName: e.target.value }) }}
                        placeholder="Last name"
                        className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <h2 className='text-lg'>Your first name is~ <label className='font-semibold text-blue-500'>{name.firstName}</label></h2>
                <h2 className='text-lg'>Your last name is~ <label className='font-semibold text-blue-500'>{name.lastName}</label></h2>
                <label className='font-semibold text-gray-400'>{JSON.stringify(name)}</label>
            </form>
        </>
    )
}

export default HookCounterThree