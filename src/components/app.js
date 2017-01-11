import React from 'react';
import { Link } from 'react-router';

import Home from './Pages/home';
import Logo from './Pages/logo';
import Navbar from './Pages/navbar';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Home />
            </div>
        )
    }
}

