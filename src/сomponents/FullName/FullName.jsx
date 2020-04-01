import React from "react";
import './FullName.css'


class FullName extends React.Component {
    render = () => {
        return (
            <h1 className="full_name">
                <span>Сергей Иванович</span>
                <span>Неплашов</span>
            </h1>
        );
    }
}

export default FullName;