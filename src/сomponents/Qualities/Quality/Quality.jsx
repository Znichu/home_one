import React from "react";
import style from './Quality.module.css'

const Quality = (props) => {
    let theme = props.quality === "Комуннист" ? "beautiful" : "";
    return (
        <span className={style[theme]}>{props.quality}&nbsp;</span>
        // <span className={style[props.theme]}>{props.quality}</span>
    );
}

export default Quality;