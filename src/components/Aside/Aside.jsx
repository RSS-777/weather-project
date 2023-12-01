import { useContext, useState, useEffect } from 'react';
import {ThemeContext} from '../../context/themeContext';
import './Aside.css';
import Map from '../Map/Map'
import { date } from '../../utils/date';

export const Aside = () => {
    const {theme} = useContext(ThemeContext)
    const [stateSeason, setStateSeason] = useState('');

    useEffect(() => {
        setStateSeason(prevState => `${date.season}-aside`)
    }, [])

    return(
        <aside className={theme === 'white' ? `${stateSeason}` : 'aside-dark'}>
            <h2>aside</h2>
            < Map />
        </aside>
    )
}