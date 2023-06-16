import React, {useMemo, useState} from "react";
import cl from "./Switcher.module.scss"


const Switcher = ({rates, arrRates,callBackFun,active,setPrice,setingValue}) => {           
    const [activeSelect,setActiveSelect] = useState(true);
    const [activeValue,setActiveValue] = useState(active);
    const [currency,setCurrency] = useState('GBP');
    const rubClasses = [cl.switchItem,cl.switchItem1];
    const rubActiveClasses = [cl.switchItem,cl.switchItem1,cl.switchItemActive];
    const activeClasses = [cl.switchItem,cl.switchItemActive];
    const click = (active) =>{
       if(active===true){
            setActiveSelect(false)
            return;
       }
       setActiveSelect(true)
    }

    useMemo(() => {
        setActiveValue(active)
        setingValue(setPrice)
        if(active !== 'RUB' && active !== 'USD' && active !== 'EUR'){
            setCurrency(active)
        }
    },[active])

    const changeValue = (char) => {
        if(char !== 'USD' && char !== 'EUR' && char !== 'RUB'){
            setCurrency(char)
            setActiveValue(char)
            callBackFun(char)
        }
        setActiveValue(char)
        callBackFun(char)
    }
    
    return (
        <ul className={cl.switcherBlock}>
                <li>
                    {(activeValue === 'RUB')

                        ?
                        <a 
                        onClick={() => changeValue('RUB')}
                        className={rubActiveClasses.join(' ')
                        }>RUB<span>Российский рубль</span></a>
                        :
                        <a 
                        onClick={() => changeValue('RUB')}
                        className={rubClasses.join(' ')
                        }>RUB<span>Российский рубль</span></a>
                    }
                </li>
                <li>
                    {(activeValue === 'USD')
                        ?
                        <a 
                        onClick={() => changeValue('USD')}
                        className={activeClasses.join(' ')}>{rates['USD'].CharCode}<span>{rates['USD'].Name}</span></a>
                        :
                        <a 
                        onClick={() => changeValue('USD')}
                        className={cl.switchItem}>{rates['USD'].CharCode}<span>{rates['USD'].Name}</span></a>
                    }
                </li>
                <li>
                    {(activeValue === 'EUR')
                        ?
                        <a 
                        onClick={() => changeValue('EUR')}
                        className={activeClasses.join(' ')}>{rates['EUR'].CharCode}<span>{rates['EUR'].Name}</span></a>
                        :
                        <a 
                        onClick={() => changeValue('EUR')}
                        className={cl.switchItem}>{rates['EUR'].CharCode}<span>{rates['EUR'].Name}</span></a>
                    }
                </li>
                <li>
                    {(activeValue === currency)
                        ?
                        <a 
                        onClick={() => changeValue(rates[currency].CharCode)}
                        className={activeClasses.join(' ')}>{rates[currency].CharCode}<span>{rates[currency].Name}</span></a>
                        :
                        <a 
                        onClick={() => changeValue(rates[currency].CharCode)}
                        className={cl.switchItem}>{rates[currency].CharCode}<span>{rates[currency].Name}</span></a>
                    }
                </li>
                <li>
                    
                    {activeSelect
                        ?
                        <a className={cl.select} onClick={()=> click(activeSelect)}><span></span></a>

                        :
                        <a className={cl.selectActive} onClick={()=> click(activeSelect)}><span>
                            <ul>
                            {arrRates.map(elem =>
                                <li onClick={()=> changeValue(elem[0])} key={elem[0]}><p>{elem[1].Name}</p><strong>{elem[0]}</strong></li>        
                            )}
                            </ul>
                        </span></a>
                    }
                </li>
                            
        </ul>
    )
}

export default Switcher;