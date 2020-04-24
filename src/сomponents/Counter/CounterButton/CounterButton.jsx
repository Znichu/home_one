import React from "react";
import style from './CounterButton.module.css'



class CounterButton extends React.Component{

    handleClick = () => {
        this.props.increment();
        this.props.addName();
    };

    render() {
        return (
            <button onClick={this.handleClick} className={style.counterButton} >
                Кнопка
            </button>
        );
    }

}

export default CounterButton;