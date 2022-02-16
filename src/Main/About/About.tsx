import style from "./About.module.scss"
import ava from "../../assets/ava1.png"
import React from "react";

export function About() {
    return (
        <div className={style.about}>
            <div className={style.avaContainer}>

                    <img className={style.ava} src={ava}></img>
            </div>
            <div className={style.aboutText}>
                <h2>afsgh fgsh fgh fghfgh </h2>
            </div>
        </div>
    )
}