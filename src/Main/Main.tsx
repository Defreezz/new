import React from "react";
import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import {Info} from "./Info/Info";

export function Main() {
    return (
        <div className={style.main_block}>
            <div className={style.main_container}>
                <div className={style.title}>
                    <h1 className={style.inner_h1}>
                        HI <br/>
                        I am <br/>
                        Frontend<br/> Developer</h1>
                </div>
                <Info/>
            </div>
        </div>
    )
}