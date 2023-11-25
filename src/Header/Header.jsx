import './Header.css';
import React, { useState } from 'react';

export const Header = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const handlerButtonClick = () => {
        if(inputValue !== ''){
           props.onCityChange(inputValue); 
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
                <h3 className='placeLocationInfo'>{props.country} {props.region} {props.nameCity}</h3>
            </div>

        </header>
    )
}