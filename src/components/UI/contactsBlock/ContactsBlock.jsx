import React from "react";
import cl from "./ContactsBlock.module.scss"

const ContactsBlock = () => {
    return(
        <div className={cl.containerContacts}>
            <div className={cl.info}>
                <h1>О проекте:</h1>
                <p>Данный проект был создан с целью обучения.<br></br>
                Осуществляющий работу на открытом API "Центрального банка России"</p>
                <span>Стек технологий используемых в разработке:</span>
                <ul>
                    <li>React <strong>18.2.0</strong></li>
                    <li>Axios <strong>1.4.0</strong></li>
                    <li>Materialize <strong>1.0.0</strong></li>
                    <li>SCSS</li>
                    <li>React-router-dom <strong>6.13.0</strong></li>
                    <li>React Context</li>
                </ul>
            </div>
            <div className={cl.contacts}>
                <div className={cl.author}></div>
                <label>Цысов Ю.В.</label>
                <ul>
                    <li><a href="https://leetcode.com/hateblade/"><div className={cl.leet}></div>leetcode</a></li>
                    <li><a href="https://github.com/hxteblade"><div className={cl.git}></div>Github</a></li>
                    <li><a href="https://spb.hh.ru/resume/1b0089e3ff0bfc38210039ed1f41666b483861"><div className={cl.hh}></div>hh</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ContactsBlock;