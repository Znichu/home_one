import React from 'react';
import './App.css';
import DialogItem from "./сomponents/DialogItem/DialogItem";
import FullName from "./сomponents/FullName/FullName";
import Qualities from "./сomponents/Qualities/Qualities";
import Counter from "./сomponents/Counter/Counter";

class App extends React.Component {

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

        // let qualities = [
        //     {quality: 'рационалист', id: 1, className: ''},
        //     {quality: 'комуннист', id: 2,  className: 'beautiful'},
        //     {quality: 'анимешник', id: 3,  className: ''},
        // ];

        return(
            <div className="App">
                {/*<FullName />*/}
                {/*<Qualities qualities = {qualities} />*/}
                {/*<DialogItem />*/}
                <Counter
                date={this.state}
                referral={this.inputValueText}
                logic={this.handleClick}
                list={this.state.listNames}
                />
            </div>
        );
    }
}

export default App;
