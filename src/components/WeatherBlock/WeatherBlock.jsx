import React, { useState, useEffect, useContext, useRef } from 'react';
import { WeatherContext } from '../../context/weatherContext';
import WeatherTable from '../WeatherTable/WeatherTable';
import { date } from '../../utils/date';
import './WeatherBlock.css';
import { ThemeContext } from '../../context/themeContext';

export const WeatherBlock = () => {
    const { data, setIndexCard } = useContext(WeatherContext);
    const { theme } = useContext(ThemeContext);
    const [stateSeason, setStateSeason] = useState('');
    const [changeNumberDays, setChangeNumberDays] = useState(3);
    const refs = useRef([]);
    const activeBlock = useRef(null);


    const changeFocus = (index) => {
        const activeElement = refs.current[index];
        activeBlock.current = activeElement;
        if (!activeElement.classList.contains('active-block')) {
            refs.current.forEach((elem) => {
                if (elem !== activeElement && elem.classList.contains('active-block')) {
                    elem.classList.remove('active-block')
                }
            });
            activeElement.classList.toggle('active-block')
            setIndexCard(index)
        }
    }
    
    useEffect(() => {
      if(refs.current[0]){
        refs.current[0].classList.add('active-block')
      }
    },[])

    const changeShowTreeDays = () => {
        setChangeNumberDays(3)
    }
    const changeShowFiveDays = () => {
        setChangeNumberDays(5)
    }
    const changeShowSevenDays = () => {
        setChangeNumberDays(7)
    }

    useEffect(() => {
        setStateSeason(date.season)
    }, [])

    const monthName = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
    const arrNameWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];

    if (!data || !data.forecast || !data.forecast.forecastday) {
        const forecastDays = Array.from({ length: changeNumberDays }, (_, index) => ({ index }));
        return (
            <main className={theme === 'white' ? stateSeason : 'season-dark'}>
                <button className={theme === 'white' ? 'btn-changeShowThree' : 'btn-changeShowThree-dark'} onClick={changeShowTreeDays}>3 дні</button>
                <button className={theme === 'white' ? 'btn-changeShowFive' : 'btn-changeShowFive-dark'} onClick={changeShowFiveDays}>5 днів</button>
                <button className={theme === 'white' ? 'btn-changeShowSeven' : 'btn-changeShowSeven-dark'} onClick={changeShowSevenDays}>7 днів</button>

                <div className="block-cards">
                    {forecastDays.map((_, index) => (
                        <div
                            className={`cards${index}`}
                            key={index}
                            ref={(elem) => refs.current[index] = elem}
                            onClick={() => changeFocus(index)}
                        >
                            {index === 0 ? <span className='today'>Cьогодні</span> : null}
                            <img className='loading' src={'https://i.gifer.com/VAyR.gif'} alt="Loading image weather" />
                        </div>
                    ))}
                </div>
                <div className="weather-info-block">
                    < WeatherTable />
                </div>
            </main>
        )
    }

    const forecastDays = data.forecast.forecastday.slice(0, changeNumberDays);

    return (
        <main className={theme === 'white' ? stateSeason : 'season-dark'}>
            <button className={theme === 'white' ? 'btn-changeShowThree' : 'btn-changeShowThree-dark'} onClick={changeShowTreeDays}>3 дні</button>
            <button className={theme === 'white' ? 'btn-changeShowFive' : 'btn-changeShowFive-dark'} onClick={changeShowFiveDays}>5 днів</button>
            <button className={theme === 'white' ? 'btn-changeShowSeven' : 'btn-changeShowSeven-dark'} onClick={changeShowSevenDays}>7 днів</button>

            <div className="block-cards">
                {forecastDays.map((dayData, index) => (
                    <div
                        className={`cards${index}`}
                        key={index}
                        ref={(elem) => refs.current[index] = elem}
                        onClick={() => changeFocus(index)}
                    >
                        {index === 0 ? <span className='today'>Cьогодні</span> : null}
                        <span className="day-week">{arrNameWeek[new Date(dayData.date_epoch * 1000).getDay()]}</span>
                        <h3 className='day-month'>{new Date(dayData.date_epoch * 1000).getDate()}</h3>
                        <img src={dayData.day.condition.icon} alt="Image weather" />
                        <div className="temp-day">{dayData.day.avgtemp_c}&deg;C</div>
                        <div>
                            <div className="degrees-celsius">
                                <div className="degrees-min">Min<br /><span>{dayData.day.mintemp_c}</span><sup>&deg;</sup></div>
                                <div className="degrees-max">Max<br /><span>{dayData.day.maxtemp_c}</span><sup>&deg;</sup></div>
                            </div>
                        </div>
                        <div className='month'>{monthName[dayData.date.split('-')[1] - 1]}</div>
                    </div>
                ))}

            </div>
            <div className="weather-info-block">
                < WeatherTable />
            </div>
        </main>
    )
}