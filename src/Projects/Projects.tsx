import React from "react";
import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {Project_Item} from "./Project_Item/Project_Item";


export type myProjects = {
    title: string
    description: string

}

export function Projects() {

    const myProjects: myProjects[] = [
        {title: "1", description: "штота магу штота магу штота магу"},
        {title: "2", description: "штота магу"},
        {title: "третий", description: "штота магу"},
    ]


    return (
        <div className={style.projects_block}>
            <div className={`${styleContainer.container} ${style.projects_container}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.block_skills}>
                    <Project_Item myProjects={myProjects}/>
                </div>
            </div>
        </div>
    )
}