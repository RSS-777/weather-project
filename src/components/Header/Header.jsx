import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../store/weather/weatherSlice';
import { changeTheme } from '../../store/theme/themeSlice';
import { date } from '../../utils/date';
import './Header.css';

export const Header = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.weather.data);
    const theme = useSelector((state) => state.theme.value);
    const [inputValue, setInputValue] = useState('');
    const [cityToFetch, setCityToFetch] = useState('Kyiv')
    const [stateSeason, setStateSeason] = useState('');
    const nameCity = data?.location?.name || 'Назва населеного пункту невідома!';
    const country = data?.location?.country || '';
    const region = data?.location?.region || '';

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        dispatch(fetchWeatherData(cityToFetch))
    }, [cityToFetch])

    const handlerButtonClick = () => {
        if (inputValue !== '') {
            setCityToFetch(inputValue)
        }
        setInputValue('')
    };

    const handleThemeChange = () => {
        const newTheme = theme === 'white' ? 'dark' : 'white';
        dispatch(changeTheme(newTheme))
    }

    useEffect(() => {
        const currentSeason = date();
        setStateSeason(currentSeason.season)
    }, [])

    return (
        <header className={theme === 'white' ? `header-${stateSeason}` : 'header-dark'}>
            <h1>погода</h1>
            <button
                className={theme === 'white' ? 'btn-theme' : 'btn-theme-dark'}
                onClick={handleThemeChange}
            >
                &#9728;&#127769;
            </button>
            <div className='container-cityNameInput'>
                <div className='block-cityNameInput'>
                    <input
                        type="text"
                        className={theme === 'white' ? 'input-search-city' : 'input-search-city-dark'}
                        id="cityInput"
                        placeholder='Назва міста (eng / ru)'
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
};