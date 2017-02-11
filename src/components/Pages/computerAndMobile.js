import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class Mobile extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>Услуги</h1>
                </div>
                <div className="container">
                    <Navbar />
                    <div className="content">
                        <h3>Ремонт и поддръжка на компютри</h3>
                        <p>
                           Не търсете повече. Нашата цел е да предлагаме възможно 
                           най-богато разнообразие от услуги. Ако компютърът или 
                           лаптопът ви имат нужда от поправка или профилактика, 
                           ние сме насреща. Ето инякои от другите услуги, които предлагаме:
                        </p>
                                <p className="listText">-пълна диагностика на компютъра</p>
                                <p className="listText">-почистване – както хардуерно, така и
                                софтуерно (почистване на регистрите, дефрагментиране и др.)</p>
                                <p className="listText">-инсталиране на операционна система по желание на клиента</p> 
                                <p className="listText">-инсталиране на софтуер и промяна на настройки по желание на клиента</p> 
                                <p className="listText">-почистване на компютъра от вируси</p> 
                                <p className="listText">-възстановяване на изтрити файлове и папки, форматирани и повредени дискови дялове</p>
                        <p>
                            Обърнете се към нас за разрешаване на всякакъв проблем. 
                            Дори ако не можем да ви помогнем, ще ви пренасочим към друг 
                            доставчик на услуги, който може да намери решението за проблемът ви.
                        </p>
                        <h3>Ремонт и поддръжка на мобилни устройства</h3>
                        <p>
                           Ние специализираме в софтуерна поправка на мобилни телефони и 
                           таблети с операционна система Android. При по-сериозен проблем, 
                           можем да ви консултираме къде да потърсите помощ и до колко би 
                           било рентабилно от финансова гледна точка.
                        </p>
                        <h3>За бизнес клиенти</h3>
                        <p>
                           За нашите бизнес клиенти имаме абонаментна програма на изгодни цени. 
                           Компютрите във вашата фирма винаги ще работят. Ние отговаряме на 
                           запитвания в най-кратки срокове и по желание на клиента можем да 
                           конфигурираме целевите компютри за отдалечено управление. По този 
                           начин сме в състояние да реагираме почти мигновено.
                           За повече информация за абонаментния пакет и промоциите, 
                           които вървят с него, натиснете ТУК.

                        </p>
                    </div>
                </div>
            </div>
        );
    }
}