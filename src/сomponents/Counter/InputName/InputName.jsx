import React from "react";
import style from './InputName.module.css'


class InputName extends React.Component {
    render() {
        let nameItem = this.props.list.map(n =><li>{n.name}</li>);
        return (
            <div className={style.listNames}>
                <span>Введенные имена:</span>
                <ul>
                    {nameItem}
                </ul>
            </div>

        );
    }
}

export default InputName;