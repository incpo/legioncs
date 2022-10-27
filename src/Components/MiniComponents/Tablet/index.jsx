import DonateSection from "./Section";
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusParams } from '../../../app/paymentSlice'
import { loadStatusData } from "../../../app/paymentSlice";
import { useState } from "react";
import PreLoader from "../PreLoader";

const Tablet = () => {

    const [data,setData] = useState();
    const dispatch = useDispatch();
    let statParam = useSelector(statusParams);

    useEffect(() => {
        fetch('http://localhost:3000/status')
        .then(response => response.json())
        .then(response => {
            dispatch(loadStatusData(response))
            setData(response)
        })
    }, [dispatch])
    
    return(
        <div className="mt-2 flex flex-col pb-10 2xl:pb-0 2xl:flex-row p-2 justify-between items-center">
            {data && statParam ? 
            <>
             <DonateSection donateStatus={data.vip} cost={statParam.time ? data.vip.status.cost : data.vip.status.cost2}/>
             <DonateSection donateStatus={data.premium} cost={statParam.time ? data.premium.status.cost : data.premium.status.cost2}/>
             <DonateSection donateStatus={data.admin} cost={statParam.time ? data.admin.status.cost : data.admin.status.cost2}/>
            </> : <PreLoader/>}
        </div>
    );
}
export default Tablet;


