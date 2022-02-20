import React from "react";
import style from "./Skills.module.scss"
import {Skill_Item} from "./Skill_Item/Skill_Item";
import {FaCss3, FaHtml5, FaJs} from "react-icons/fa";
import {SiMaterialui, SiMobx, SiReact, SiRedux, SiTypescript} from "react-icons/si";
import {Apps} from "@mui/icons-material";

const fish = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
export type mySkill = {
    title: string
    icon?:any


}

export function Skills() {

    const mySkills: mySkill[] = [

        {title: "TypeScript",icon:<SiTypescript style={{width: "50px",height: "50px"}}/>, },
        {title: "React",icon:<SiReact style={{width: "50px",height: "50px"}}/>, },
        {title: "Redux",icon:<SiRedux style={{width: "50px",height: "50px"}}/>, },
        {title: "MobX",icon:<SiMobx style={{width: "50px",height: "50px"}}/>, },
        {title: "Material UI",icon:<SiMaterialui style={{width: "50px",height: "50px"}}/>, },
        {title: "REST API",icon:<Apps style={{width: "50px",height: "50px"}}/>, },
        {title: "Javascript",icon:<FaJs style={{width: "50px",height: "50px"}}/>, },
        {title: "HTML",icon:<FaHtml5 style={{width: "50px",height: "50px"}}/>, },
        {title: "CSS",icon:<FaCss3 style={{width: "50px",height: "50px"}}/>, },

    ]


    return (
        <div className={style.skills_block}>
            <div className={style.skills_container}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.block_skills}>
                    <Skill_Item mySkills={mySkills}/>
                </div>
            </div>
        </div>
    )
}