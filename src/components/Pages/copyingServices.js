import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class Copying extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>Услуги</h1>
                </div>
                <div className="container">
                    <Navbar />
                    <div className="content">
                        <p>
                            Ние сканираме всичко – документи, плакати, 
                            книги и много други. Нашето оборудване позволява 
                            внимателно отношение към книгите – те няма да бъдат 
                            смачкани и повредени. Сканираното може да принтираме 
                            в черно-бели или цветни копия, в зависимост от 
                            предпочитанията, включително А3.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}