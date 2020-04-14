import React from "react";
import style from './CounterInput.module.css'


class CounterInput extends React.Component{
    render() {
        return (
            <input ref={this.props.referral} className={style.counterInput} type="text" placeholder="Введите Ваше имя"/>
        );
    }

}

export default CounterInput;