import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class Promo extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>Промоции</h1>
                </div>
                <div className="container">
                    <Navbar />
                    <div className="content">
                        <h3>Промоции</h3>
                        <p>Ние вярваме в истинските цени на нещата.
                            Не би имало промоция ако надуем цените и
                            после ги свалим за кратко. Нашите промоции
                            представляват комбинирани пакети от услуги.
                            Ако поръчате две различни по вид услуги,
                            едната ще получите на половин цена.  Ако
                            поръчате стока от нас, ще получите избрана
                            от вас наша услуга безплатно.</p>
                        <p>За повече информация, се свържете с нас.</p>
                    </div>
                </div>
            </div>
        );
    }
}