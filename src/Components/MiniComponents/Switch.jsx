import { useState } from "react";
import { useDispatch} from "react-redux";
import { setTimeStatus } from "../../app/paymentSlice";
import Switch from "react-switch";

const DonateSwitch = () => {
    const [checked, setChecked] = useState(true)
    const dispatch = useDispatch();

    const statusHandle = () => {
        setChecked(!checked);
        dispatch(setTimeStatus())
    }

    return(
        <div className='mt-2 xl:mt-4 2xl:mt-6'>
              <label className='text-white text-[1.05rem]' htmlFor="donate">
                <div className='flex items-center justify-center'>
                <span className='p-2'>МЕСЯЦ</span>
                <Switch
                    checked={checked}
                    onChange={statusHandle}
                    handleDiameter={22}
                    offColor="#5217D1"
                    onColor="#5217D1"
                    height={29}
                    width={80}
                    borderRadius={8}
                    id="donate"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    
                />
                <span className='p-2'>НАВСЕГДА</span>
                </div>
              </label>
        </div>
    )
}
export default DonateSwitch;