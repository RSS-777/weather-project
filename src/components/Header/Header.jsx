import React, { useState, useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext';
import './Header.css';
import { ThemeContext } from '../../context/themeContext'

export const Header = () => {
    const [inputValue, setInputValue] = useState('');
    const { data, setNameCity } = useContext(WeatherContext)
    const { theme, setTheme } = useContext(ThemeContext)

    const nameCity = data?.location?.name || 'Місцезнаходження чи назва недоступні';
    const country = data?.location?.country || '';
    const region = data?.location?.region || '';

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const handlerButtonClick = () => {
        if (inputValue !== '') {
            setNameCity(inputValue)
        }
        setInputValue('')
    }

    return (
        <header className={theme === 'white' ? 'header' : 'header-dark'}>
            <h1>погода</h1>
            <button className={theme === 'white' ? 'btn-theme' : 'btn-theme-dark'} onClick={() => {
                setTheme(theme === 'white' ? 'dark' : 'white')
            }}>&#9728;&#127769;</button>
            <div className='container-cityNameInput'>
                <div className='block-cityNameInput'>
                    <input
                        type="text"
                        className={theme === 'white' ? 'input-search-city' : 'input-search-city-dark'}
                        id="cityInput"
                        placeholder='Введіть назву міста'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button
                        onClick={handlerButtonClick}
                        className={theme === 'white' ? 'btn-search-city' : 'btn-search-city-dark'}> Пошук
                    </button>
                </div>
                <h3 className={theme === 'white' ? 'placeLocationInfo' : 'placeLocationInfo-dark'}>{country} {region} {nameCity}</h3>
            </div>

        </header>
    )
}