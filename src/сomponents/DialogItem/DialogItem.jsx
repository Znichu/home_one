import React from "react";
import './DialogItem.css';
import Message from "./Message/Message";
import Name from "./Name/Name";
import Avatar from "./Avatar/Avatar";

class DialogItem extends React.Component {

    render = () => {
        return (
            <div className="telegram_message">
                <div className="avatar">
                    <Avatar/>
                </div>
                <div className="cloud">
                    <div className="cloud_name">
                        <Name/>
                    </div>
                    <div className="cloud_text">
                        <Message/>
                    </div>
                </div>
            </div>
        );
    }
}


export default DialogItem;