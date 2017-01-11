import React from 'react';
import { Link } from 'react-router';

import Home from './home';
import About from './about';
import VirtualReality from './virtualReality';
import Shop from './shop';
import Services from './services';
import Contacts from './contacts';


export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <ul>
                        <li><Link to="#/home">Начало</Link></li>    
                        <li><Link to="/about">За нас</Link></li>
                        <li><Link to="/virtualReality">Виртуална реалност</Link></li>
                        <li><Link to="/shop">Магазин</Link></li>
                        <li><Link to="/services">Сервиз</Link></li>
                        <li><Link to="/contacts">Контакти</Link></li>
                    </ul>
                </div>
            </div>    
        )
    }
}