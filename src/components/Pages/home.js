import React from 'react';

import Logo from './logo';
import Navbar from './navbar';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>Начало</h1>
                </div>
                    <Navbar />
            </div>
        );
    }
}