import React from 'react'
import useInput from '../Hooks/useInput';
import { changeCondition, setParams } from '../app/paymentSlice';
import { useDispatch } from 'react-redux';

export default function Form({modalInfo, setModalActive}) {

    const accountID = useInput('', {isEmpty: true, minLength: 8});
    const email = useInput('', {isEmpty: true, isEmail: true});
    const dispatch = useDispatch();
    const confirmPayment = (hook1,hook2) => {
        if(hook1.isEmail || hook1.isEmpty) return false;
        if(hook2.isEmpty || hook2.minLengthError) return false
        // request to back
    }
    const closeModalHandle=(e)=> {
        e.preventDefault();
        setModalActive('hide')
        dispatch(changeCondition())
        dispatch(setParams(''))
    }

    return (
        <>
            {modalInfo ? 
                <div className='px-4 py-6 text-left'>
                <h1 className=' text-white text-2xl'>Оплата покупки привилегии</h1>
                <p className='py-2 text-white text-xs md:text-base opacity-70'>Воспользовавшись этой формой, вы можете поддержать проект финансово. Внимательно выберайте привилегию и её срок действия.</p>
                <form>
                    <div className='flex flex-col md:flex-row'>
                        <div className={`${styles.inputField1} md:w-1/2`}>
                            <span  className='text-white '>Привилегия</span>
                            <input className={`${styles.input}`} defaultValue={modalInfo[0]}  type="text" disabled/>
                        </div>
                        <div className={`${styles.inputField1} md:w-1/2`}>
                            <span title='Скопируйте ссылку вашего профиля Steam и узнайте Account ID через сервис.' className='text-white '>AccountID <span  className='opacity-40'><a target='__blank'  href="https://steamid.pro/">?</a></span></span>
                            <input onChange={accountID.onChange} onBlur={accountID.onBlur} className={`${styles.input}`} type="number" min='0' />
                            <span className='text-xs pt-1 text-rose-500 '>{accountID.isEmpty || accountID.minLengthError}</span>
                        </div>
                    </div>
                    <div className={styles.inputField2}>
                        <span className='text-white'>Почта <span className='opacity-40'>(Email address)</span></span>
                        <input onChange={email.onChange} onBlur={email.onBlur} type='email' className={`${styles.input} `}/>
                        <span className='text-xs pt-1 text-rose-500 '>{email.isEmpty || email.isEmail}</span>
                    </div>
                    <div className={styles.inputField2}>
                        <span className='text-white'>Цена</span>
                        <div className='relative rounded-[0.2rem] overflow-hidden'>
                            <input className={`${styles.input} w-full`} value={`${modalInfo[2]} рублей`} disabled/>
                            <button className='absolute right-0 h-full w-[30%] bg-[#5217D1] text-[0.8rem] md:text-[1rem] text-white' disabled>{modalInfo[1]}</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-2 mt-4'>
                        <button onClick={e=> {e.preventDefault(); confirmPayment(email, accountID)}} className={`${styles.btn} bg-[#5217D1] text-white`}>Дальше</button>
                        <button className={`${styles.btn} bg-[#EFF2FC]`} onClick={e=> {closeModalHandle(e)}}>Закрыть</button>
                    </div>
                </form>
            </div>
            : <></>    
            }
        </>
    )
}

    const styles = {
        inputField1 : 'flex flex-col p-2 text-center',
        inputField2 : 'flex flex-col text-center p-2',
        input: 'rounded-[0.2rem] p-1  md:w-full md:text-center',
        btn: 'w-full p-2 rounded-lg font-bold'
    }