import React from "react";
import style from './Counter.module.css'
import CounterInput from "./CounterInput/CounterInput";
import InputName from "./InputName/InputName";


class Counter extends React.Component {
    render() {
        return (
            <div className={style.mainCounter}>
                <div className={style.mainCounterNumber}>
                    <span>
                       Колличество нажатий на кнопку: {this.props.date.counter}
                    </span>
                </div>
                    <CounterInput
                        increment={this.props.logic}
                        addInputName={this.props.addInputName}
                    />
                <div className={style.inputListName}>
                    <InputName list={this.props.list}/>
                </div>
            </div>
        );
    }
}

export default Counter;