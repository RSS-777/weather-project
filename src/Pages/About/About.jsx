import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { date } from '../../utils/date';
import './About.css'


export const About = () => {
    const [stateSeason, setStateSeason] = useState('');
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setStateSeason(date.season)
    }, [])

    return (
        <article className={theme === 'white' ? `container-about-${stateSeason}` : 'container-about-dark'}>
            <div className='about-block'>
                <h2 className='about-h2'>про нас</h2>
                <div className="about-text">
                    <span><b>Моя історія:</b></span>
                    <p>Займаюся програмуванням з 2008 року та створюю веб-сайти на різноманітні теми. У 2023 році успішно завершив курси з фронтенд-розробки.</p>
                </div>
                <div className="about-text">
                    <span><b>Мої цінності:</b></span>
                    <p>Це - чесність, наполегливість та ретельно ставлюсь до кожної роботи. Метою моєї роботи є досягнення найкращих результатів для клієнтів, задовольняючи їхні потреби та розв’язуючи проблеми за допомогою передових технологій.</p>
                </div>
                <div className="about-text">
                    <span><b>Мої плани на майбутнє:</b></span>
                    <p>Планую продовжувати особисте зростання та вдосконалення, розробляючи нові продукти й поглиблюючи свої навички у програмуванні. Я завжди відкритий до співпраці та нових можливостей.</p>
                </div>
                <div className="about-text">
                    <span><b>Мої навички веб-розробника:</b></span>
                    <p>Маю досвід розробки веб-сторінок з використанням <span class="highlighted">HTML</span>, <span class="highlighted">CSS</span> та <span class="highlighted">JavaScript</span>. Розумію <span class="highlighted">React</span> і роботу з <span class="highlighted">API</span> для отримання даних. Використовую <span class="highlighted">Vite</span> для оптимізації процесу розробки. Готовий вдосконалювати свої навички та вчитися новому.</p>
                </div>
            </div>
        </article>
    )
}

