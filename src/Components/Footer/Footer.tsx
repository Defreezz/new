import styleContainer from "../../common/styles/Container.module.css"
import s from "./Footer.module.css"
import React from "react";

export function Footer() {
    return (
        <div className={s.footer_block}>
            <div className={styleContainer.container}>
                <div className={s.footer_container}>
                    <h2 className={""}>name name</h2>
                    <div className={s.contDiv}>
                        <div className={s.someDiv}></div>
                        <div className={s.someDiv}></div>
                        <div className={s.someDiv}></div>
                        <div className={s.someDiv}></div>
                        <div className={s.someDiv}></div>
                        <div className={s.someDiv}></div>
                        <div className={s.someDiv}></div>
                    </div>
                    <span>copyright</span>

                </div>
            </div>
        </div>
    )
}