import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class Service extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>Услуги в социалната сфера</h1>
                </div>
                <div className="container">
                    <Navbar />
                    <div className="content">
                        <h3>Услуги в социалната сфера</h3>
                        <p>Очаквайте скоро...</p>
                    </div>
                </div>
            </div>
        );
    }
}