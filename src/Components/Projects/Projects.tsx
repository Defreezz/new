import React from "react";
import style from "./Projects.module.scss"
import {Project_Item} from "./Project_Item/Project_Item";




export function Projects() {
        return (
        <div className={style.projects_block}>
            <div className={style.projects_container}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.block_skills}>
                    <Project_Item />
                </div>
            </div>
        </div>
    )
}