import React, {useEffect, useState} from 'react';
import InfoContainer from './MiniComponents/InfoContainer'
import PageContainer from './MiniComponents/PageContainer'
import env from '../assets/env.json'
import {loadStatusData} from "../app/paymentSlice";

export default function Rules() {
    const [rulesContent, setRulesContent] = useState()
    useEffect(()=> {
        fetch(`${env.urlBackend}/rules`)
            .then(response => response.json())
            .then(response => {
                setRulesContent(response.rules)
            })
    }, [])

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

