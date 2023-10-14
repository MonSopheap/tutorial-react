import React, { useState, useMemo } from 'react'
import { Facebook, GitHub, Instagram, Twitter } from 'react-feather'
import FeatherIconButton from '../../../../components/FeatherIconButton'

function XCounter() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  // It will slow interface
  // Because state update component rerender ui.
  // const isEven = () => {
  //   let i = 0
  //   while (i < 2000000000) i++
  //   return counterOne % 2 === 0
  // }

  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <>
      <div>
        <button
          onClick={incrementOne}
          className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm mt-1 mb-1">
          Click Counter One - <label className='font-semibold'>{counterOne} ({isEven ? 'Even' : 'Odd'})</label> times
        </button>
      </div>
      <div>
        <button
          onClick={incrementTwo}
          className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm mt-1 mb-1">
          Click Counter Two - <label className='font-semibold'>{counterTwo}</label> times
        </button>
      </div>
      <div className='mt-1 m-auto '>
        <FeatherIconButton text="Github">
          <GitHub size={20} />
        </FeatherIconButton>
      </div>
      <div className='mt-1 m-auto '>
        <FeatherIconButton text="Facebook" color="bg-blue-500">
          <Facebook size={20} />
        </FeatherIconButton>
      </div>
      <div className='mt-1 m-auto '>
        <FeatherIconButton text="Instagram" color="bg-gradient-to-tr from-yellow-500 to-purple-500 vai-pink-500">
          <Instagram size={20} />
        </FeatherIconButton>
      </div>
      <div className='mt-1 m-auto '>
        <FeatherIconButton text="Twitter" color="bg-sky-500">
          <Twitter size={20} />
        </FeatherIconButton>
      </div>
      <div className='mt-1 m-auto '>
        <FeatherIconButton />
      </div>
    </>
  )
}

export default XCounter