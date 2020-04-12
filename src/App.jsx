import React from 'react';
import './App.css';
import DialogItem from "./сomponents/DialogItem/DialogItem";
import FullName from "./сomponents/FullName/FullName";
import Qualities from "./сomponents/Qualities/Qualities";

function App() {


    let qualities = [
        {quality: 'рационалист', id: 1, className: ''},
        {quality: 'комуннист', id: 2,  className: 'beautiful'},
        {quality: 'анимешник', id: 3,  className: ''},
    ];
    return (
        <div className="App">
            <FullName />
            <Qualities qualities = {qualities} />
            <DialogItem />
        </div>
    );
}

export default App;
