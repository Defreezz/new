import style from "./info.module.scss"
import React from "react";
import {InfoItem} from "./InfoItem";
import icon_1 from "../../assets/icon-01.png"
import icon_2 from "../../assets/icon-02.png"
import icon_3 from "../../assets/icon-03.png"

export type Info = {
    title: string
    description: string
    img:string

}
const info: Info[] = [
    {title: "Умею", description: "Info InfoInfInfo InfoInfo Info InfoInfo InfoInfo Info Infoo Info Info", img:icon_1},
    {title: "Делать", description: "Info InfoInfo InfoInfo Info InfoInfo InfoInfo Info InfoInfo", img:icon_2},
    {title: "Дела", description: " Info afsaf Info InfoInfo Info InfoInfo InfoInfo Info Infosdf sdf sad fsd ", img:icon_3},
]


export function Info() {
    return (
        <div className={style.info}>
        <InfoItem infoItem={info}/>
        </div>
    )
}