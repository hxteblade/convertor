import React, { useEffect, useState } from "react";
import cl from "./ConvertorTable.module.scss"
import CbrService from "../../API/CbrService";
import SideBlock from "../side/SideBlock";
import Swap from "../swap/Swap"
import Loader from "../loader/Loader";



const ConvertorTable = () => {
    
    const [rates,setRates] = useState({});
    const [loading,setLoading] = useState(false);

    const [toCurrency,setToCurrency] = useState('RUB');
    const [fromCurrency,setFromCurrency] = useState('USD');
    const [toPrice,setToPrice] = useState(0);
    const [fromPrice,setFromPrice] = useState(0);

    const setToValue = (val) => {
        setToPrice(val)
        let from;
        let to;
        {(toCurrency === 'RUB') ? to = 1 : to = rates[toCurrency].Value}
        {(fromCurrency === 'RUB') ? from = 1 : from = rates[fromCurrency].Value}
        const price = val / from;
        const result = price * to;
        {(result === 0) ? setFromPrice(result) : setFromPrice(result.toFixed(4))}
    }
    const setFromValue = (val) => {
        setFromPrice(val)
        let from;
        let to;
        {(toCurrency === 'RUB') ? to = 1 : to = rates[toCurrency].Value}
        {(fromCurrency === 'RUB') ? from = 1 : from = rates[fromCurrency].Value}
        const price = val / to;
        const result = price * from;
        {(result === 0) ? setToPrice(result) : setToPrice(result.toFixed(4))}
    }


    const swapFun = () => {
        let temp = fromCurrency;
        setFromCurrency(toCurrency)
        setToCurrency(temp)
    }

    const setingValute = async ()  => {
        const response = await CbrService.getDaily();
        setRates({...response.data.Valute})
        setLoading(true)
    }
    useEffect(() => {
        setingValute();
    }, [])
    const arr = Object.entries(rates)

    return (
        <div className={cl.tableContainer}>
            {loading
                ?
                <>
                <SideBlock
                rates={rates}
                arrRates={arr}
                returnFun={setToCurrency}
                currency={toCurrency}
                fromCurrency={fromCurrency}
                setValue={setToValue}
                setPrice={toPrice}
                value={toPrice}
                />
                <Swap
                swapFun={swapFun}
                />
                <SideBlock
                rates={rates}
                arrRates={arr}
                returnFun={setFromCurrency}
                currency={fromCurrency}
                fromCurrency={toCurrency}
                setValue={setFromValue}
                setPrice={toPrice}
                value={fromPrice}
                />
                </>
                :
                <Loader/>
            }
        </div>
    )
}

export default ConvertorTable;