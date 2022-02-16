import style from "./info.module.scss"
import React from "react";
import {Info} from "./Info";

type InfoItem = {
    infoItem: Info[]

}

export function InfoItem ({infoItem}: InfoItem) {
    const mySkillsJSX = infoItem.map((item,i) =>
        <div key={i} className={style.item}>
            <div >
                <img className={style.icon} src={item.img} alt="info"/>
            </div>
            <h2>
                {item.title}
            </h2>
            <p className={style.description}>
                {item.description}
            </p>
        </div>)

    return (
        <>
            {mySkillsJSX}
        </>
    );
}