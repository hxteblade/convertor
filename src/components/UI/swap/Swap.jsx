import React from "react";
import cl from "./Swap.module.scss"

const Swap = ({swapFun}) => {
    return(
        <div>
            <div className={cl.button} onClick={() => swapFun()}></div>
        </div>
    )
}

export default Swap;