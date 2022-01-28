import React from "react";
import style from "./Header.module.css"
import {Navbar} from "./navbar/Navbar";

export function Header() {
    return (
        <div className={style.header}>
            <Navbar/>
        </div>
    )
}