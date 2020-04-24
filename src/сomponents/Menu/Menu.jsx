import React from "react";
import style from './Menu.module.css'
import {NavLink} from "react-router-dom";


const Menu = () => {
    return (
        <div className={style.outerMenu}>
            <input className={style.checkboxToggle} type="checkbox"/>
            <div className={style.hamburger}>
                <div></div>
            </div>
            <div className={style.menu}>
                <div>
                    <div>
                        <ul>
                            <li>Понедельник</li>
                            <li><NavLink activeClassName={style.activeMenu} to="/counter">Поле ввода</NavLink></li>
                            <li><NavLink activeClassName={style.activeMenu} to="/dialog">Облако сообщения</NavLink></li>
                            <li><NavLink activeClassName={style.activeMenu} to="/qualities">Качества</NavLink></li>
                            <li><NavLink activeClassName={style.activeMenu} to="/fullname">Ф.И.О</NavLink></li>
                            <li>Вторник</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;