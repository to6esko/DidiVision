import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class Contacts extends React.Component {
    
    render() {
        let faceBookImg = { backgroundImage: 'url(' + 'img/internet_facebook.png' + ')', width: 25, height: 25 };
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
                    <div className="content-contact">
                        <h3>ВР ВИЖЪН ЕООД</h3>
                        <br/>
                        <p>Гр. Варна</p>
                        <p>Ул. „Петко Стайнов“ № 12 (до Вх. 9),</p>
                        <br/>
                        <p>Управител: Пламен Стоилов</p>
                        <p>Телефон за контакт: <span className='address'>0898 529 363</span></p>
                        <br/>
                        <p>Технически организатор: Дияна Кръстева</p>
                        <p>Телефон за контакт: <span className='address'>0884 84 35 33</span></p>
                        <br/>
                        <p>e-mail: <span className='address'>vrvision@abv.bg</span></p>
                        <p>Харесайте ни във <a href="https://www.facebook.com/vrvision.bg/?fref=ts" style={faceBookImg} className="socialFaceBook" target="_blank">FaceBook</a></p>
                    </div>
                </div>
            </div>
        );
    }
}