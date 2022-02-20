import style from "./Links.module.scss";
import {FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa";
import {SiCodewars} from "react-icons/si";
import React from "react";

type Links = {
    height:string
    width:string
}

export function Links({height,width}:Links) {
    return (
        <div className={style.linksContainer}>
            <a target={"_blank"} href="https://t.me/Defreezz">
                <FaTelegram style={{height,width}} className={style.link}/>
            </a>
            <a target={"_blank"} href="https://www.linkedin.com/in/artsiom-yatsevich-0327a3206">
                <FaLinkedin style={{height,width}} className={style.link}/>
            </a>
            <a target={"_blank"} href="https://github.com/defreezz">
                <FaGithub style={{height,width}} className={style.link}/>

            </a>
            <a target={"_blank"} href="https://www.codewars.com/users/Defreezz">
                <SiCodewars style={{height,width}} className={style.link}/>

            </a>
        </div>
    )
}