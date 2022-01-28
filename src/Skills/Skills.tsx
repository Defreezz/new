import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {Skill_Item} from "./Skill_Item/Skill_Item";

const fish = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
export type mySkill = {
    title: string
    description: string

}

export function Skills() {

    const mySkills: mySkill[] = [
        {title: "HTML", description: fish},
        {title: "JS JS", description: fish},
        {title: "CSS", description: fish},
    ]


    return (
        <div className={style.skills_block}>
            <div className={`${styleContainer.container} ${style.skills_container}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.block_skills}>
                    <Skill_Item mySkills={mySkills}/>
                </div>
            </div>
        </div>
    )
}