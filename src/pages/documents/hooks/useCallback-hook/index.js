import React, { useState, useCallback } from 'react'
import ButtonComponent from './Button'
import Count from './Count'
import TitleComponent from './Title'

function UseCallBackHook() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(5000)

    const increment = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <>
            <TitleComponent />
            <Count text='Age' count={age} />
            <ButtonComponent handleClick={increment}>
                Increment Age
            </ButtonComponent>
            <Count text='Salary' count={salary} />
            <ButtonComponent handleClick={incrementSalary}>
                Increment Salary
            </ButtonComponent>
        </>
    )
}

export default UseCallBackHook