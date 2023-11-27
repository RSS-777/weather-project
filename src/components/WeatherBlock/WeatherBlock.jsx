import React, { useState, useEffect, useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext';
import WeatherTable from '../WeatherTable/WeatherTable';
import { date } from '../../utils/date';
import './WeatherBlock.css';

export const WeatherBlock = () => {
    const { data } = useContext(WeatherContext);
    const [stateSeason, setStateSeason] = useState('');
    const [changeNumberDays, setChangeNumberDays] = useState(3)

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
            <main className={stateSeason}>
                <div className="block-cards">
                    {forecastDays.map((dayData, index) => (
                        <div className={`cards${index}`} key={index}>
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
        <main className={stateSeason}>
            <button className='btn-changeShowThree' onClick={changeShowTreeDays}>3 дні</button>
            <button className='btn-changeShowFive' onClick={changeShowFiveDays}>5 днів</button>
            <button className='btn-changeShowSeven' onClick={changeShowSevenDays}>7 днів</button>

            <div className="block-cards">
                {forecastDays.map((dayData, index) => (
                    <div className={`cards${index}`} key={index}>
                        {index === 0 ? <span className='today'>Cьогодні</span> : null}
                        <span className="day-week">{arrNameWeek[index + 1]}</span>
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