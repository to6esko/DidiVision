import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import createHistory from 'history/createBrowserHistory';
//import { createHashHistory } from 'history';

import App from './components/app';
import Home from './components/Pages/home';
//import News from './components/Pages/news';
import Mobile from './components/Pages/computerAndMobile';
import Multimeia from './components/Pages/multimediaServices';
import VirtualReality from './components/Pages/virtualReality';
import Abonament from './components/Pages/abonament';
import Shop from './components/Pages/shop';
import Copying from './components/Pages/copyingServices';
//import Service from './components/Pages/service';
import Promo from './components/Pages/promo';
import Contacts from './components/Pages/contacts';


const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/" component={App}/>
        <Route path="computerAndMobile" component={Mobile} />
        <Route path="copyingServices" component={Copying} />
        <Route path="multimediaServices" component={Multimeia} />
        <Route path="virtualReality" component={VirtualReality} />
        <Route path="abonament" component={Abonament}/>
        <Route path="shop" component={Shop} />
        <Route path="promo" component={Promo}/>
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