import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(false);
    const [minLengthError, setMinLengthError] = useState(false);
    const [isEmail,setEmail] = useState(false)
    const [inputValid, setInputValid] = useState(false)
    
    const validateEmail = (email) => {
        return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); //eslint-disable-line
      };

    useEffect(()=> {
        for (const validation in validations) {
           switch(validation) {
                case 'minLength': 
                    value.length < validations[validation] ? setMinLengthError(`Минимальное кол-во символов: ${validations[validation]}!`) : setMinLengthError(false)
                    break;
                case 'isEmpty': 
                    value ? setEmpty(false) : setEmpty('Поле должно быть заполненным!')
                    break;
                case 'isEmail':
                    !validateEmail(value) ? setEmail('Введите корректный email!') : setEmail(false)
                    break;
                    default:
               
           }
        }
    }, [value, validations])

    useEffect(()=> {
        (isEmpty || isEmail || minLengthError) ? setInputValid(false) : setInputValid(true)
    }, [isEmpty, minLengthError, isEmail])

    return {
        isEmpty,
        minLengthError,
        isEmail,
        inputValid,
    }
}
export default useValidation;