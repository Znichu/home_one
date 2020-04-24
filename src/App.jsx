import React from 'react';
import './App.css';
import DialogItem from "./сomponents/DialogItem/DialogItem";
import FullName from "./сomponents/FullName/FullName";
import Qualities from "./сomponents/Qualities/Qualities";
import Counter from "./сomponents/Counter/Counter";
import {NavLink, Route, Switch} from "react-router-dom";
import Menu from "./сomponents/Menu/Menu";


class App extends React.Component {

    state = {
        listNames: [
            {name: " "}
        ],
        counter: 0
    };

    incrementCounter = () => this.setState((prevState) => ({counter: prevState.counter + 1}));

    addInputName = (name) => {
        let listName = [...this.state.listNames, {name: name}];
        this.setState({listNames: listName});
    };

    render() {

        let qualities = [
            {quality: 'рационалист', id: 1, className: ''},
            {quality: 'комуннист', id: 2, className: 'beautiful'},
            {quality: 'анимешник', id: 3, className: ''},
        ];

        return (
            <div className="App">
                <Route path="/counter" render={() => <Counter
                    addInputName={this.addInputName}
                    date={this.state}
                    logic={this.incrementCounter}
                    list={this.state.listNames}
                />}/>
                <Route path="/fullname" component={FullName}/>
                <Route path="/qualities" render={() => <Qualities qualities={qualities}/>}/>
                <Route path="/dialog" component={DialogItem}/>

                <Menu/>

                {/*<Switch>*/}
                {/*    <Route path="/fullname" component={FullName}/>*/}
                {/*    <Route path="/qualities" render={() => <Qualities qualities = {qualities} />}/>*/}
                {/*    <Route path="/dialog" component={DialogItem}/>*/}
                {/*    <Route path="/counter" render={() => <Counter*/}
                {/*                                            addInputName={this.addInputName}*/}
                {/*                                            date={this.state}*/}
                {/*                                            logic={this.incrementCounter}*/}
                {/*                                            list={this.state.listNames}*/}
                {/*                                        />}/>*/}
                {/*<FullName />*/}
                {/*<Qualities qualities = {qualities} />*/}
                {/*<DialogItem />*/}
                {/*<Counter*/}
                {/*    addInputName={this.addInputName}*/}
                {/*    date={this.state}*/}
                {/*    logic={this.incrementCounter}*/}
                {/*    list={this.state.listNames}*/}
                {/*/>*/}
                {/*</Switch>*/}
            </div>
        );
    }
}

export default App;
