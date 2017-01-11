import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import createHistory from 'history/createBrowserHistory';
//import { createHashHistory } from 'history';

import Home from './components/Pages/home';
import App from './components/app';
import About from './components/Pages/about';
import VirtualReality from './components/Pages/virtualReality';
import Shop from './components/Pages/shop';
import Services from './components/Pages/services';
import Contacts from './components/Pages/contacts';


const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/" component={App}/>
        <Route path="about" component={About} />
        <Route path="virtualReality" component={VirtualReality} />
        <Route path="shop" component={Shop} />
        <Route path="services" component={Services} />
        <Route path="contacts" component={Contacts} />
    </Router >, app
);

/*
//let history = new createHashHistory();
const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
        <Route path="about" component={About}/>
    </Router >, app
);
*/