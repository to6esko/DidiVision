import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class Shop extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>Магазин</h1>
                </div>
                <div className="container">
                    <Navbar />
                    <div className="content">
                        <h3> Какво е Lorem Ipsum?</h3>
                        <p>
                            Стандартният отрязък от Lorem Ipsum, използван от 1500 г. насам, е поместен по-долу за тези, които се интересуват. Секции 1.10.32 и 1.10.33 от "de Finibus Bonorum et Malorum" на Цицерон също са поместени в оригиналния им формат, заедно с превода им на английски език, направен от H. Rackham през 1914г.
                        </p>
                        <h3> Какво е Lorem Ipsum?</h3>
                        <p>
                            Стандартният отрязък от Lorem Ipsum, използван от 1500 г. насам, е поместен по-долу за тези, които се интересуват. Секции 1.10.32 и 1.10.33 от "de Finibus Bonorum et Malorum" на Цицерон също са поместени в оригиналния им формат, заедно с превода им на английски език, направен от H. Rackham през 1914г.
                        </p>
                        <h3> Какво е Lorem Ipsum?</h3>
                        <p>
                            Стандартният отрязък от Lorem Ipsum, използван от 1500 г. насам, е поместен по-долу за тези, които се интересуват. Секции 1.10.32 и 1.10.33 от "de Finibus Bonorum et Malorum" на Цицерон също са поместени в оригиналния им формат, заедно с превода им на английски език, направен от H. Rackham през 1914г.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}