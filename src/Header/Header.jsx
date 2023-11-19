import './Header.css';
import React, { useEffect, useRef, useState } from 'react';

export const Header = () => {
    const [nameCity, setNameCity] = useState('')
    const [inputValue, setInputValue] = useState('');

    const handleInputChange =(event) => {
        setInputValue(event.target.value);
    }
    const handlerButtonClick =()=>{
        setNameCity(inputValue);
        setInputValue('')
    }
    return (
        <header>
            <h1>Weather</h1>
            <h5>{nameCity}</h5>

            
            <input
                type="text"
                id="cityInput"
                placeholder='Enter the name of the city'
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handlerButtonClick}>Show</button>
        </header>
    )
}