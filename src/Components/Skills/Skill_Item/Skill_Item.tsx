import React from "react";
import style from "./SkillItem.module.scss"
import {mySkill} from "../Skills";
import {FaReact} from "react-icons/fa";

type SkillItemType = {
    mySkills: mySkill[]
}

export function Skill_Item({mySkills}: SkillItemType) {
    const mySkillsJSX = mySkills.map((s,i) =>
        <div key={i} className={style.skill_item}>
            <div className={style.icon}>
                {s.icon}
            </div>
            <h3>
                {s.title}
            </h3>
        </div>)

    return (
        <>
            {mySkillsJSX}
        </>
    );
}

