import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class VirtualReality extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>Виртуална реалност</h1>
                </div>
                <div className="container">
                    <Navbar />
                    <div className="content">
                        <p>
                            Добре дошли във виртуалната реалност. 
                            Това не е 3D или някакви ефекти с вода 
                            и дим… сложете си очилата за виртуална 
                            реалност “Oculus Rift” и вече сте другаде. 
                            Гледайте как зомбита пълзят към вас или 
                            релаксирайте на плажа, докато седите на 
                            стола. Пилотирайте космически кораб и 
                            защитавайте земята или се гмурнете в 
                            дълбините на океана.
                        </p>
                        <p>
                            Може би искате нещо по-обикновено – какво ще 
                            кажете за концерт или футболен мач… и вие сте там.
                        </p>
                        <p>
                            Виртуалната реалност е златна мина и за всеки геймър. 
                            Кой не би искал наистина да се озове в световете на 
                            Counterstrike или GTA. Сега това е възможно.
                        </p>
                        <p>ЗАПОВЯДАЙТЕ в нашия офис за демонстрация на виртуалната реалност.
                            Ако ви хареса, можете да й се насладите почасово.</p>
                        <p className="listText">Цени:</p>
                                <p className="listText">15 Мин. – 3 лв.</p>
                                <p className="listText">15 Мин. – 6 лв.</p>
                                <p className="listText">1 Час – 10 лв.</p>
                                <p className="listText">2 Часа – 18 лв.</p> 
                                <p className="listText">10 Часа – 80 лв.</p> 
                                <p className="listText">Над 48 часа – по договорка</p>
                        <p>Срещу съответните цени предлагаме пакети които могат да се
                            използват в едномесечен срок и от неограничен брой потребители.</p>
                        <p>ТОВА НЕ Е ДОСТАТЪЧНО? Можем да осигурим пълна конфигурация
                            за виртуална реалност, която да ползвате у дома или за
                            вашия бизнес. Също така консултираме, помагаме за
                            разрешаване на възникнали проблеми при употреба и
                            настройките на технологията.</p>
                        <p>За повече информация се свържете с нас или гледайте
                            нашите видео материали.</p>
                    </div>
                </div>
            </div>
        );
    }
}