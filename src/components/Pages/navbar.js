import React from 'react';
import { Link } from 'react-router';

import Home from './home';
//import News from './news';
import Mobile from './computerAndMobile';
import Copying from './copyingServices';
import Multimeia from './multimediaServices';
import VirtualReality from './virtualReality';
import Abonament from './abonament';
import Shop from './shop';
//import Service from './service';
import Promo from './promo';
import Contacts from './contacts';


export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar" role="navigation">
                    <ul className="home">
                        <li><Link to="#/home" aria-haspopup="true">Начало</Link></li>
                        <ul className="home-content">
                            <li className="dropdown"><Link>Услуги</Link>
                                <ul className="dropdown-content">
                                    <li><Link to="/computerAndMobile" aria-haspopup="true">Сервиз на компютри и мобилни устройства</Link></li>
                                    <li><Link to="/copyingServices" aria-haspopup="true">Копирни услуги</Link></li>
                                    <li><Link to="/multimediaServices" aria-haspopup="true">Мултимедийни услуги</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/virtualReality" aria-haspopup="true">Виртуална реалност</Link></li>
                            <li><Link to="/abonament" aria-haspopup="true">Абонаментна програма</Link></li>
                            <li><Link to="/shop" aria-haspopup="true">Магазин</Link></li>
                            <li><Link to="/promo" aria-haspopup="true">Промоции</Link></li>
                            <li><Link to="/contacts" aria-haspopup="true">Контакти</Link></li>
                        </ul>
                    </ul>
                </nav>
            </div>
        )
    }
}