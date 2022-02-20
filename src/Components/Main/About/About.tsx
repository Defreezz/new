import React from "react";
import {FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa";
import {SiCodewars} from "react-icons/si";
import Button from "@mui/material/Button";
import FileDownload from "@mui/icons-material/FileDownload";
import style from "./About.module.scss";
import ava from "../../../assets/ava2.png"
import {Links} from "../../Common/Links/Links";


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
                        <p ><b>education</b>: BNTU </p>
                        <p ><b>Qualification</b>: Engineer. Pattern Designer. Designer </p>
                        <Button
                            color={"secondary"}
                            variant="contained"
                            startIcon={<FileDownload/>} >
                            Download CV
                        </Button>
                    </div>
                    <div className={style.links}>
                        <Links height={"45px"} width={"45px"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}