import React from 'react'
import LeftBody from './LeftBody'
import RightBody from './RightBody'

const Body = () => {
  return (
    <div className='flex w-[100%] h-[84vh] bg-slate-500'>
    <LeftBody></LeftBody>
    <RightBody></RightBody>
    </div>
  )
}

export default Body