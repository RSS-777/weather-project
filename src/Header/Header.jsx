import './Header.css';
import React, { useState, useContext } from 'react';
import { WeatherContext} from '../context/weatherContext';

export const Header = () => {
    const [inputValue, setInputValue] = useState('');
    const {data, setNameCity} = useContext(WeatherContext)

    const nameCity = data?.location?.name || 'Location or name is not available';
    const country = data?.location?.country || '';
    const region = data?.location?.region || '';

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const handlerButtonClick = () => {
        if(inputValue !== ''){
           setNameCity(inputValue)
        }
        setInputValue('')
    }

    return (
        <header>
            <h1>погода</h1>
            <div className='container-cityNameInput'>
                <div className='block-cityNameInput'>
                    <input
                        type="text"
                        id="cityInput"
                        placeholder='Введіть назву міста'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button onClick={handlerButtonClick}>Пошук</button>
                </div>
                <h3 className='placeLocationInfo'>{country} {region} {nameCity}</h3>
            </div>

        </header>
    )
}