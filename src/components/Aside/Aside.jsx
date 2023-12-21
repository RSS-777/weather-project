import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { date } from '../../utils/date';
import './Aside.css';

export const Aside = () => {
    const { theme } = useContext(ThemeContext);
    const [stateSeason, setStateSeason] = useState('');

    useEffect(() => {
        setStateSeason(prevState => `${date.season}-aside`)
    }, [])

    return (
        <aside className={theme === 'white' ? `${stateSeason}` : 'aside-dark'}>
            <div className="advertising">
                <a href="https://fashiontema.com.ua/dostupno-yakisno-ta-stylno-zhinochyi-odiah-vyrobnyka-feshentema/" target="_blank">
                    <img  src="https://fashiontema.com.ua/content/uploads/images/zhnochiystilni-gol.png" alt="Реклама магазин одягу" />
                </a>
            </div>
            <div className="advertising">
                <a href="https://rozetka.com.ua/news-articles-promotions/promotions/233522_sale_bosch/" target="_blank">
                    <img  src="https://content.rozetka.com.ua/promotions/main_image/original/388741919.jpg" alt="Реклама розетка" />
                </a>
            </div>
            <div className="advertising">Тут може бути ваша реклама!</div>
        </aside>
    )
};