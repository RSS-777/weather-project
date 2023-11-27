import React, { useState, useEffect, useContext } from 'react';
import { WeatherContext } from '../context/weatherContext';
import './WeatherBlock.css';
import WeatherTable from '../WeatherTable/WeatherTable';
import { date } from '../utils/date';

export const WeatherBlock = () => {
    const { data } = useContext(WeatherContext);
    const [stateSeason, setStateSeason] = useState('');
    useEffect(() => {
        setStateSeason(date.season)
    }, [])

    const monthName = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
    const arrNameWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];

    if (!data || !data.forecast || !data.forecast.forecastday) {
        const forecastDays = Array.from({ length: 5 }, (_, index) => ({ index }));
        return (
            <main className={stateSeason}>
            <div className="block-cards">

                {forecastDays.map((dayData, index) => (
                    <div className={`cards${index}`} key={index}>
                        {index === 0 ? <span className='today'>Cьогодні</span> : null}
                        <img src={'https://i.gifer.com/VAyR.gif'} alt="Image weather" />
                    </div>
                ))}

            </div>
            <div className="weather-info-block">
                < WeatherTable />
            </div>
        </main>
        )

    }

    const forecastDays = data.forecast.forecastday.slice(0, 5);

    return (
        <main className={stateSeason}>
            <div className="block-cards">

                {forecastDays.map((dayData, index) => (
                    <div className={`cards${index}`} key={index}>
                        {index === 0 ? <span className='today'>Cьогодні</span> : null}
                        <span className="day-number">{arrNameWeek[index + 1] }</span>
                        <h3>{new Date(dayData.date_epoch * 1000).getDate()}</h3>
                        <img src={dayData.day.condition.icon || 'https://i.gifer.com/VAyR.gif'} alt="Image weather" />
                        <div className="temp-day">{dayData.day.avgtemp_c}&deg;C</div>
                        <div className='temperature'>
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