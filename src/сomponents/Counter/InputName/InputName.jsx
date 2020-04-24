import React from "react";
import style from './InputName.module.css'


class InputName extends React.Component {
    render() {
        let nameItem = this.props.list.map((n, index) =><li key={index}>{n.name}</li>);
        return (
            <div className={style.listNames}>
                <h1>Введенные имена:</h1>
                <ul>
                    {nameItem}
                </ul>
            </div>

        );
    }
}

export default InputName;