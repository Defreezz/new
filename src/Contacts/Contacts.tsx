import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css"


export function Contacts() {
    return (
        <div className={style.contacts_block}>
            <div className={styleContainer.container}>
                <div className={style.contacts_container}>
                    <h2 className={style.title}>Contacts</h2>
                    <form className={style.form}>
                        <input className={style.input}></input>
                        <input className={style.input}></input>
                        <textarea className={style.textArea}></textarea>
                    </form>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}