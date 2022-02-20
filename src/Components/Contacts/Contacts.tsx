import React from "react";
import style from "./Contacts.module.scss"
import {Links} from "../Common/Links/Links";



export function Contacts() {
    return (
        <div className={style.contacts_block}>
                <div className={style.contacts_container}>
                    <div className={style.wrapper}>
                        <div className={style.form_block}>
                            <h2 className={style.title}>Contacts</h2>
                            <form className={style.form}>
                                <input className={style.input}></input>
                                <input className={style.input}></input>
                                <textarea className={style.textArea}></textarea>
                            </form>
                            <button>Send</button>
                        </div>
                    </div>
                    <div className={style.plug}>
                        <div className={style.plug_upper}>

                        </div>
                        <div className={style.plug_lower}>
                            <Links height={"36px"} width={"36px"}/>
                        </div>
                    </div>

                </div>
            </div>

    )
}