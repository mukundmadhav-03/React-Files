import React from 'react'

const Card = (props) => {
  
  return (
    <div>
        <div className='w-[180px] h-[auto] bg-emerald-500 rounded-lg'>
            <img src="{props.user.Image}" alt="" className='rounded-lg'/>

            <h3 className='text-center  font-semibold text-white my-1 text-[2rem]'>{props.user.userName}</h3>

            <p className='text-justify px-2 pb-3 text-white text-[1.25rem] font-medium text-xs'>{props.user.about}</p>
        </div>
    </div>
  )
}

export default Card