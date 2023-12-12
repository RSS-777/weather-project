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
            <div className="advertising">Тут може бути ваша реклама!</div>
            <div className="advertising">Тут може бути ваша реклама!</div>
            <div className="advertising">Тут може бути ваша реклама!</div>
        </aside>
    )
};