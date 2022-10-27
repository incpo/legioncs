import InfoContainer from './MiniComponents/InfoContainer'
import PageContainer from './MiniComponents/PageContainer'
import DonateSwitch from './MiniComponents/Switch';
import Tablet from './MiniComponents/Tablet';
import Modal from './MiniComponents/Modal';
import Form from './Form';
import Toast from './MiniComponents/Toast';

import statusConverter from '../helpers/statusConverter';
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { statusParams, statusData } from '../app/paymentSlice'

export default function Donate() {
  const [modalActive,setModalActive] = useState('hide');
  const [modalInfo, setModalInfo] = useState();
  const [toast,setToast] = useState([]);
  const status = useSelector(statusParams)
  const statData = useSelector(statusData);
  return (
    <PageContainer info={
        <InfoContainer header='ПРИВИЛЕГИИ' btnText='КУПИТЬ' value={
          <div>
            <DonateSwitch/>
            <Tablet/>                  
            <Modal modalActive={modalActive} setModalActive={setModalActive}>
              <Form modalInfo={modalInfo} setModalActive={setModalActive} />
            </Modal>
            <Toast toast={toast} setToast={setToast}/>
          </div>
              
        } btnOnClick={()=>{
          if(status.status === '') {
            if(toast.length < 3) setToast([...toast, {description: 'Сначала выберите привилегию!'}]);
            return false;
          };
          const choosenStatus = statusConverter(status,statData)
          // get full payment info to proceed payment change from setState to setRedux statement
          setModalInfo(choosenStatus)
          setModalActive('Modalactive')
        }}/>
    } imgClass='donate' 
    />
  )
}
