import { useDispatch, useSelector } from "react-redux";
import { changeCondition, setParams } from "../../../app/paymentSlice";
const DonateSection = ({donateStatus, cost}) => {
  const props = donateStatus;  
  const dispatch = useDispatch();
  const btnStatus = useSelector(state=> state.payment.statusCondition);
  
  const chooseStatus = (e) => {
    dispatch(changeCondition())
    dispatch(setParams(e.target.dataset.key))
  }

  return (
    <div className="relative text-center w-[90%] 2xl:w-[32%] my-5 2xl:mb-24">
        <div className="rounded-3xl h-auto 2xl:min-h-[540px] p-4 bg-white">
            <div className="text-center p-2 text-2xl font-bold">{props.status.enName}</div>
            <div className="flex w-full relative"><span className="relative font-bold text-2xl">₽{cost}</span><span className="text-xs pt-2 pl-1">стоимость</span></div>
            <div className="mt-2 w-[90%]"><p className="text-[#667085] text-left"><span>{props.status.ruName}</span> статус на CS:GO сервере “LEGION | [PUBLIC] ONLY MIRAGE ! 128 tiсk”</p></div>
            <div><hr className="my-3 opacity-80 bg-[#000]"/></div>
            <div className="pb-4">
                <div className="table-list pl-6 text-left relative">
                    {Object.values(props.status.benefits).map(item=> 
                        <p key={item} className="listDonate ml-2 text-[1.1rem]">{item}</p>
                    )}
                </div>
            </div>
        </div>
        <div className="absolute left-0 right-0 bottom-[-4%]">
            {btnStatus ? <button data-key={props.status.key} onClick={chooseStatus} className={`btn_black active py-[0.3rem] px-8 md:py-2 md:px-10 lg:py-4 2xl:px-12 ease duration-300`}>Выбрать</button>
            : <button disabled className={`disabled py-[0.3rem] px-8 md:py-2 md:px-10 lg:py-4 2xl:px-12 ease duration-300`}>Выбрано!</button>}
        </div>

    </div>
  )
}
export default DonateSection;