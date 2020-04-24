import React from "react";
import style from './CounterInput.module.css'
import CounterButton from "../CounterButton/CounterButton";


class CounterInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            errorClass: ""
        }
    }

    addName = () => {
        const { name } = this.state;
        if ( name ) {
            this.props.addInputName(name);
            alert("Привет "+ name);
            this.setState({ name: '' });
        } else {
            this.setState({ errorClass: "error"})
        }
    };

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
        this.setState({ errorClass: " "});
    };

    handleEnter = (event) => {
        if (event.key === "Enter") {
            this.addName();
        }
    };

    render() {
        const { name } = this.state;
        let classError = this.state.errorClass === "error" ? style.error: "";
        return (
            <div className={style.mainInput+ " " + classError }>
                <input
                    onKeyPress={this.handleEnter}
                    onChange={this.handleNameChange}
                    value={name}
                    type="text"
                    placeholder="Введите Ваше имя"
                    required="required"
                />
                <CounterButton
                    increment={this.props.increment}
                    addName={this.addName}
                />
            </div>
        );
    }

}

export default CounterInput;