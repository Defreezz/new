import React from "react";
import style from "./SkillItem.module.css"
import {mySkill} from "../Skills";

type SkillItemType = {
    mySkills: mySkill[]
}

export function Skill_Item({mySkills}: SkillItemType) {
    const mySkillsJSX = mySkills.map((s,i) =>
        <div key={i} className={style.skill_item}>
            <div className={style.icon}>

            </div>
            <h3>
                {s.title}
            </h3>
            <span className={style.description}>
                {s.description}
            </span>
        </div>)

    return (
        <>
            {mySkillsJSX}
        </>
    );
}

