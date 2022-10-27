import React from 'react';
import InfoContainer from './MiniComponents/InfoContainer'
import PageContainer from './MiniComponents/PageContainer'

export default function Rules() {
  return (
    <PageContainer info={
      <InfoContainer header='ПРАВИЛА' btnText='Скачать' value={
        <>
          <div className='content text-left p-1 md:p-2 2xl:p-4 text-[#322B41]'>
            <p className='text-xl'>{rulesContent}</p>
          </div>
        </>
      }/>
    } imgClass='rules'/>
  )
}

const rulesContent = `test`