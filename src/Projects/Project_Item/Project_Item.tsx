import React from "react";
import style from "./Project_Item.module.css"
import {myProjects} from "../Projects";


type ProjectItemType = {
    myProjects: myProjects[]
}

export function Project_Item({myProjects: myProjects}: ProjectItemType) {
    const myProjectsJSX = myProjects.map((p,i) =>
        <div key={i} className={style.project_item}>
            <div className={style.img}>

            </div>
            <button className={style.button}>Смотреть</button>
            <h3>
                {p.title}
            </h3>
            <span className={style.description}>
                {p.description}
            </span>
        </div>)

    return (
        <>
            {myProjectsJSX}
        </>
    );
}