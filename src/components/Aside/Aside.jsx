import { useContext } from 'react';
import {ThemeContext} from '../../context/themeContext';
import './Aside.css';
import Map from '../Map/Map'

export const Aside = () => {
    const {theme} = useContext(ThemeContext)
    return(
        <aside className={theme === 'white' ? 'aside' : 'aside-dark'}>
            <h2>aside</h2>
            < Map />
        </aside>
    )
}