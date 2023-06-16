import React, { useContext } from "react";
import cl from "./Menu.module.scss"
import { Link } from "react-router-dom";
import { ActiveContext } from "../../context";

const Menu = ({header,items}) => {
    const {active,setActive} = useContext(ActiveContext)
    const rootClasses = [cl.menu]
    if(active){
        rootClasses.push(cl.menuActive)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={()=> setActive(false)}>
            <div className={cl.blur}>
                <div className={cl.menuContent} onClick={(e)=> e.stopPropagation()}>
                    <div className={cl.menuHeader}>
                        {header}
                    </div>
                    <ul>
                        {items.map(item =>
                            <li key={item.value}>
                                <Link onClick={()=> setActive(false)} className="navbar-link" to={item.href}>{item.value}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu;