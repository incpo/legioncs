import React from 'react'
import PreLoader from './MiniComponents/PreLoader'

export default function LoadPage() {
  return (
    <div className='absolute left-0 right-0 bottom-0 top-[20%] text-center items-center'>
        <PreLoader/>
        <div className=''>
        <h1 className='text-white text-3xl font-extrabold '>LEGI<span className='text-[#5217D1]'>ON</span></h1>
        </div>
    </div>
  )
}
