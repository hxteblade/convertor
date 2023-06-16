import React, { useContext, useState } from "react";
import cl from "./BurgerBtn.module.scss"
import { ActiveContext } from "../../context";

const BurgerBtn = () => {
    const {active,setActive} = useContext(ActiveContext)
    return (
        <nav className={cl.nav}>
          <div className={active === true? cl.burgerBtnCurred : cl.burgerBtn} onClick={()=>{
            if(active === false){
                setActive(true)
                return
            }
            setActive(false)
          }}>
            <span></span>
          </div>
        </nav>
    )
}

export default BurgerBtn;