import React from "react";

let dateWithouthSecond = new Date();

class Time extends React.Component {

    render = () => {
        return (
            dateWithouthSecond.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        );
    }
}

export default Time;