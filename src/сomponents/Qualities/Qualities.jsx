import React from "react";
import style from './Qualities.module.css'
import Quality from "./Quality/Quality";


const Qualities = (props) => {
    let quality = props.qualities.map(i => <Quality key={i.id}
                        quality = {i.quality[0].toUpperCase() + i.quality.substring(1)} /> );

    return (
        <div className={style.qualities}>
                {quality}
        </div>
    );
}
export default Qualities;
