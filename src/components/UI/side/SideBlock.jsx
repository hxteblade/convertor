import React from "react";
import Switcher from "../switcher/Switcher";
import InputBox from "../inputBox/InputBox";
import cl from "./SideBlock.module.scss"

const SideBlock = ({rates,arrRates,returnFun,currency,fromCurrency,setValue,setPrice,value}) => {
    
    const calc = (char) => {
        returnFun(char)
    }

    return(
        <div className={cl.container}>
            <Switcher
                rates={rates}
                arrRates={arrRates}
                callBackFun={calc}
                active={currency}
                setValue={setValue}
                setPrice={setPrice}
                setingValue={setValue}
            />
            <InputBox
                setValue={setValue}
                value={value}
                currency={currency}
                fromCurrency={fromCurrency}
                rates={rates}
            />
        </div>
    )
}
export default SideBlock;