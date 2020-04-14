import React from "react";
import style from './CounterButton.module.css'



class CounterButton extends React.Component{
    render() {
        return (
            <button onClick={this.props.logic} className={style.counterButton} >
                Кнопка
            </button>
        );
    }

}

export default CounterButton;