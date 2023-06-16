import React from "react";
import cl from "./inputBox.module.scss"
import { hover } from "@testing-library/user-event/dist/hover";

const InputBox = ({setValue,value,currency,fromCurrency,rates}) => {
    let price = 0;
    let cur = 0;
    let from = 0;
    {(currency === 'RUB') ? cur = 1 : cur = rates[currency].Value}
    {(fromCurrency === 'RUB') ? from = 1 : from = rates[fromCurrency].Value}
    price = (1/from)*cur;
    return(
        <div className={cl.container}>
            <input type="number" style={{fontSize: 44,width: 363,boxShadow: "none",borderBottom: "none",marginBottom: 24}} className={cl.input} value={value} onChange={event => setValue(event.target.value)}/>
            <p>1 {currency} = {price.toFixed(4)} {fromCurrency}</p>
        </div>
    )
}

export default InputBox;