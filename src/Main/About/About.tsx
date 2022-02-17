import style from "./About.module.scss"
import ava from "../../assets/ava2.png"
import React from "react";
import {FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa";
import {SiCodewars} from "react-icons/si";


export function About() {
    return (
        <div className={style.about}>
            <div className={style.aboutContainer}>
                <div className={style.avaContainer}>

                    <img className={style.ava} src={ava}></img>
                </div>
                <div className={style.aboutText}>
                    <div><h1>ARTSIOM
                        YATSEVICH </h1>
                        <p><b>location</b>: MINSK, BELARUS </p>
                        <p><b>age</b>: 28 YEARS, BORN ON 2 JULY 1993</p>
                        <p><b>phone</b>: +375 25 333 33 22</p>
                        <p ><b>email</b>: <a className={style.email} href="mailto:name@email.by">yatsevich-artsiom@yandex.by</a></p>
                        <button>Download CV</button>
                    </div>
                    <div className={style.linksContainer}>
                        <a target={"_blank"} href="https://t.me/Defreezz">
                            <FaTelegram className={style.link}/>
                        </a>
                        <a target={"_blank"} href="https://www.linkedin.com/in/artsiom-yatsevich-0327a3206">
                            <FaLinkedin className={style.link}/>
                        </a>
                        <a target={"_blank"} href="https://github.com/defreezz">
                            <FaGithub className={style.link}/>

                        </a>
                        <a target={"_blank"} href="https://www.codewars.com/users/Defreezz">
                            <SiCodewars className={style.link}/>

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}