import React from "react";
import style from './FullName.module.css'


class FullName extends React.Component {
    render = () => {

        return (
            <div className={style.wrapper}>
                <h1 className={style.title}>Неплашов Сергей Иванович</h1>
            </div>
        );
    }
}

export default FullName;