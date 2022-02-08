import React from "react";
import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import {Info} from "./Info/Info";

export function Main() {
    return (
        <div className={style.main_block}>
            <div className={styleContainer.container}>
                <div className={style.title}>
                    <h1 className={style.inner_h1}>HI</h1>

                    <h1>I am </h1>

                    <h1> Frontend Developer</h1>
                </div>
                <Info/>
            </div>
        </div>
    )
}