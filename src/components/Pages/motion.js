import React from 'react';
import { Motion, spring } from 'react-motion';
import presets from './presets';


const title = [
    {
        task: "Вашият компютър е в сигурни ръце"
    },
    {
        task: "Инсталиране на посочен софтуер или операционна система"
    },
    {
        task: "Възстановяване на изтрити файлове и почистване от вируси"
    },
    {
        task: "Продажба на нови компютри и мобилни устройства"
    },
    {
        task: "Сканиране и копирни услуги"
    },
    {
        task: "Изработка на визитки"
    },
    {
        task: "Смяна на части и продажба на нови"
    },
    {
        task: "Консултация за това кой вариант е най-добър за Вас"
    }
]
export default class TextMotion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title,
            key: 0
        };
    }

    countInterval() {
        var i,
            self = this,
            key = self.state.key,
            counter = self.state.title;
        for (i = 0; i < counter.length - 1; i++) {
            counter = counter[i];
        }
        key++;
        if (key > self.state.title.length - 1) {
            key = 0;
        }

        self.setState({ title: self.state.title, key});
    }
    

    componentDidMount() {
        this.interval = setInterval(() => {
            this.countInterval();
        }, 6000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const titles = this.state.title[this.state.key];

        let taskIndex=1;
        return (
            <div>
                {
                    this.state.title.map((taskObject) => {
                        taskIndex++;

                        const pos = taskIndex % 2 === 0 ?
                            {
                                y: spring(80, presets.moble),
                                x: spring(80, presets.moble),
                                z: 1
                            } :
                            {
                                y: spring(-80, presets.moble),
                                x: spring(-80, presets.moble),
                                z: 1
                            }
                        
                        return <Motion key={taskIndex}
                            defaultStyle={{ y: 350, x: 350, z: 1 }}
                            style={pos}>
                            
                            {(obj) => {
                                const {y, x, z} = obj;
                                let style = {
                                    WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${z})`,
                                    transform: `translate3d(${x}px, ${y}px, 0) scale(${z})`
                                }
                                return (
                                    <div className="slide-content">
                                        <div className="slideShow">
                                            <p className="motion" style={style}>{titles.task}</p>
                                        </div>
                                    </div>
                                )
                            }}
                        </Motion>
                    })
                }
            </div>
        )
    }
}