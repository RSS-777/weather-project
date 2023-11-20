import './Header.css';
import React, { useState } from 'react';

export const Header = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const handlerButtonClick = () => {
        props.onCityChange(inputValue);
        setInputValue('')
    }
    return (
        <header>
            <h1>Weather</h1>
            <div className='block-cityNameInput'>
                <input
                    type="text"
                    id="cityInput"
                    placeholder='Enter the name of the city'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button onClick={handlerButtonClick}>Show</button>
            </div>
            <h3 className='placeLocationInfo'>{props.country} {props.region} {props.nameCity}</h3>
        </header>
    )
}