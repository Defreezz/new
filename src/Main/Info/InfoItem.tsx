import style from "./info.module.scss"
import React from "react";
import {Info} from "./Info";

type InfoItem = {
    infoItem: Info[]

}

export function InfoItem ({infoItem}: InfoItem) {
    const mySkillsJSX = infoItem.map((item,i) =>
        <div key={i} className={style.item}>
            <div className={style.icon}>
                <img src={item.img} alt="info"/>
            </div>
            <h3>
                {item.title}
            </h3>
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