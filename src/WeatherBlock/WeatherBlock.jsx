import React, { useState, useEffect } from 'react';
import './WeatherBlock.css';
import { date } from '../utils/date';
import Day1 from '../card-components/Day1';
import Day2 from '../card-components/Day2';
import Day3 from '../card-components/Day3';
import Day4 from '../card-components/Day4';
import Day5 from '../card-components/Day5';


export const WeatherBlock = (props) => {
    const [stateSeason, setStateSeason] = useState('');
    useEffect(() => {
        setStateSeason(date.season)
    }, [])

    const wind_kph = props.weatherApi?.current?.wind_kph || '';
    const temp = props.weatherApi?.current?.temp_c || '';
    const tempMin = props.weatherApi?.forecast?.forecastday[0].day.mintemp_c || '';
    const tempMax = props.weatherApi?.forecast?.forecastday[0].day.maxtemp_c || '';
    const feelslike = props.weatherApi?.current?.feelslike_c || '';
    const humidity = props.weatherApi?.current?.humidity || '';
    const is_day = props.weatherApi?.current?.is_day || '';
    const pressure_in = props.weatherApi?.current?.pressure_in || '';
    const vis_km = props.weatherApi?.current?.vis_km || '';
    const wind_degree = props.weatherApi?.current?.wind_degree || '';
    const wind_dir = props.weatherApi?.current?.wind_dir || '';
    const text = props.weatherApi?.current?.condition.text || '';

    return (
        <main className={stateSeason}>
            <div className="block-cards">
                < Day1 weatherApi={props.weatherApi} />
                < Day2 weatherApi={props.weatherApi} />
                < Day3 weatherApi={props.weatherApi} />
                < Day4 weatherApi={props.weatherApi} />
                < Day5 weatherApi={props.weatherApi} />

            </div>
            <div className="weather-info-block">
                Температура на даний час: {temp}< br />
                Швидкість вітру: {wind_kph}<br />
                Напрямок вітру за компасом: {wind_dir}<br />
                Напрямок вітру в градусах: {wind_degree}<br />
                Видимість {vis_km}<br />
                Атмосферний тиск: {pressure_in}<br />
                Пора дня: {is_day === 0 ? 'День' : 'Ніч'}<br />
                Вологість повітря: {humidity}<br />
                Відчутність тепла: {feelslike}<br />
                Погодні умови : {text}<br />
                Мінімальна температура: {tempMin}<br />
                Максимальна температура: {tempMax}<br />
            </div>
        </main>
    )
}