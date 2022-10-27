import './style.css'

import React from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react';

export default function Toast({toast, setToast}) {

    const deleteToast = useCallback((description) => {
        const toastItem= toast.filter(e=> e.description !== description);
        setToast(toastItem)
    }, [toast, setToast])

    useEffect(()=> {
        const interval = setInterval(()=> {
            if(toast.length) deleteToast(toast[0].description)
        }, 2500)

        return () => {
            clearInterval(interval)
        }
    }, [toast, deleteToast])

    return (
        <div className='toastWrap'>
            {toast && toast.map((item,i)=><div className='toast' key={i}><p className='text-white'>{item.description}</p></div>)}
        </div>
    )
}
