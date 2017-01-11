import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class VirtualReality extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>Виртуална реалност</h1>
                </div>
                <div className="container">
                    <Navbar />
                    <div className="content">
                        <h3> Какво е Lorem Ipsum?</h3>
                        <p>
                            Lorem Ipsum е намерен в секции 1.10.32 и 1.10.33 от "de Finibus Bonorum et Malorum"(Крайностите на Доброто и Злото) от Цицерон, написан през 45г.пр.Хр. Тази книга е трактат по теория на етиката, много популярна през Ренесанса. Първият ред на Lorem Ipsum идва от ред, намерен в секция 1.10.32.
                        </p>
                        <h3> Какво е Lorem Ipsum?</h3>
                        <p>
                            Lorem Ipsum е намерен в секции 1.10.32 и 1.10.33 от "de Finibus Bonorum et Malorum"(Крайностите на Доброто и Злото) от Цицерон, написан през 45г.пр.Хр. Тази книга е трактат по теория на етиката, много популярна през Ренесанса. Първият ред на Lorem Ipsum идва от ред, намерен в секция 1.10.32.
                        </p>
                        <h3> Какво е Lorem Ipsum?</h3>
                        <p>
                            Lorem Ipsum е намерен в секции 1.10.32 и 1.10.33 от "de Finibus Bonorum et Malorum"(Крайностите на Доброто и Злото) от Цицерон, написан през 45г.пр.Хр. Тази книга е трактат по теория на етиката, много популярна през Ренесанса. Първият ред на Lorem Ipsum идва от ред, намерен в секция 1.10.32.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}