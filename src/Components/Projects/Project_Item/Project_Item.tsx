import React from "react";
import style from "./Project_Item.module.scss"
import {MultiActionAreaCard} from "../../Common/MultiActionAreaCard/MultiActionAreaCard";
import socNet from "../../../assets/soc.jpg"
import todo from "../../../assets/Todo.png"
import cards from "../../../assets/cards.jpg"

export type myProjects = {
    title: string
    description: string
    img:any

}

export function Project_Item() {
    const myProjects: myProjects[] = [
        {title: "Todolist", description: "Todolist client",img:todo},
        {title: "Social network", description: "Social network client.Used class components, redux, ant design",img:socNet},
        {title: "Cards", description: "something",img:cards},
    ]
    const myProjectsJSX = myProjects.map((p,i) =>
        <div key={i} className={style.project_item}>
            <MultiActionAreaCard
                title={p.title}
                description={p.description}
                img={p.img}
            />
        </div>)

    return (
        <>
            {myProjectsJSX}
        </>
    );
}