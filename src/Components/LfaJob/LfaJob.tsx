import React from "react";
import style from "./LfaJob.module.css"
import styleContainer from "../../common/styles/Container.module.css"


export function LfaJob() {
    return (
        <div className={style.lfaJob_block}>
            <div className={styleContainer.container}>
                <div className={style.lfaJob_container}>
                    <span>Рассматриваю вариатны удаленной работы</span>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    )
}