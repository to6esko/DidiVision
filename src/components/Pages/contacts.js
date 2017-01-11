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
                        <h3> Откъде произлиза?</h3>
                        <p>
                            Противно на всеобщото вярване, Lorem Ipsum не е просто случаен текст. Неговите корени са в класическата Латинска литература от 45г.пр.Хр., което прави преди повече от 2000 години. Richard McClintock, професор по Латински от колежа Hampden-Sydney College във Вирджиния, изучавайки една от
                        </p>
                        <h3> Откъде произлиза?</h3>
                        <p>
                            Противно на всеобщото вярване, Lorem Ipsum не е просто случаен текст. Неговите корени са в класическата Латинска литература от 45г.пр.Хр., което прави преди повече от 2000 години. Richard McClintock, професор по Латински от колежа Hampden-Sydney College във Вирджиния, изучавайки една от
                        </p>
                        <h3> Откъде произлиза?</h3>
                        <p>
                            Противно на всеобщото вярване, Lorem Ipsum не е просто случаен текст. Неговите корени са в класическата Латинска литература от 45г.пр.Хр., което прави преди повече от 2000 години. Richard McClintock, професор по Латински от колежа Hampden-Sydney College във Вирджиния, изучавайки една от
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}