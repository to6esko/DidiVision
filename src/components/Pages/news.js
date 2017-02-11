import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

//not use
export default class News extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>Новини</h1>
                </div>
                <div className="container">
                    <Navbar />
                    <div className="content">
                        <h3>Новини</h3>
                        <p> Очаквайте скоро...</p>
                    </div>
                </div>
            </div>
        );
    }
}