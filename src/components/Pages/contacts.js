import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class Contacts extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>Контакти</h1>
                </div>
                <div className="container">
                    <Navbar />
                    <div className="content">
                        <h3>ВР ВИЖЪН ЕООД</h3>
                        <br/>
                        <p>Гр. Варна</p>
                        <p>Ул. „Петко Стайнов“ № 12 (до Вх. 9),</p>
                        <br/>
                        <p>Управител: Пламен Стоилов</p>
                        <p>Телефон за контакт: 0898 529 363</p>
                        <br/>
                        <p>Технически организатор: Дияна Кръстева</p>
                        <p>Телефон за контакт: 0884 84 35 33</p>
                        <br/>
                        <p>e-mail: vrvision@abv.bg</p>
                    </div>
                </div>
            </div>
        );
    }
}