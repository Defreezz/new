import React from "react";
import style from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {my_photo} from "../common/img";

export function Main() {
    return (
        <div className={style.main_block}>
            <div className={styleContainer.container}>
                <div className={style.inner_text}>
                    <span>Hi there</span>
                    <h1>I am</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={style.inner_photo}>
                    <img src={my_photo}></img>
                </div>
            </div>
        </div>
    )
}