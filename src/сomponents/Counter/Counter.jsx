import React from "react";
import style from './Counter.module.css'
import CounterButton from "./CounterButton/CounterButton";
import CounterInput from "./CounterInput/CounterInput";
import InputName from "./InputName/InputName";


class Counter extends React.Component {
    inputValueText = React.createRef();

    state = {
        listNames: [
            {name: null}
        ],
        counter: 0
    };

    incrementCounter = () => this.setState((prevState) => ({counter: prevState.counter + 1}));

    alertInputValue = () => {
        let mainText = this.inputValueText.current.value;
        this.inputValueText.current.value = "";
        let listName = [...this.state.listNames, {name: mainText}];
        if (mainText.length === 0) {
            alert("Введите ваше имя");
        } else {
            this.setState({listNames: listName});
            alert("Привет " + mainText);
        }
    };

    handleClick = () => {
        this.incrementCounter();
        this.alertInputValue();
    };

    render() {
        return (
            <div className={style.mainCounter}>
                <div className={style.mainCounterNumber}>
                    <span>
                        Вы нажали на кнопку: {this.state.counter} раз.
                    </span>
                </div>
                <div className={style.mainCounterInput}>
                    <CounterInput referral={this.inputValueText}/>
                    <CounterButton logic={this.handleClick}/>
                </div>
                <div className={style.inputListName}>
                    <InputName list={this.state.listNames}/>
                </div>
            </div>
        );
    }
}

export default Counter;