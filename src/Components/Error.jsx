import React from 'react'
import PageContainer from './MiniComponents/PageContainer'

export default function Error() {
  return (
    <PageContainer
      info={
        <div>
          <h1 className='text-white'>ERROR</h1>
        </div>
      } imgClass={
        'main'
      }
    />
  )
}
