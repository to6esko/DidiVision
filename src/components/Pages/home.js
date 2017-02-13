import React from 'react';

import Logo from './logo';
import Navbar from './navbar';
import TextMotion from './motion'

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
                <div>
                    <Navbar />
                </div>
                <div>
                    <TextMotion />
                </div>    
            </div>
        );
    }
}