import React, { useState, useEffect } from 'react';
import './Main.css';
import { date } from '../utils/date';
import Day1 from '../card-components/Day1';
import Day2 from '../card-components/Day2';
import Day3 from '../card-components/Day3';
import Day4 from '../card-components/Day4';
import Day5 from '../card-components/Day5';


export const Main = (props) => {
    const [stateSeason, setStateSeason] = useState('');
    useEffect(() => {
         setStateSeason(date.season) 
    }, [])

    const temp = props.weatherApi?.current?.temp_c || '';
    const tempMin = props.weatherApi?.forecast?.forecastday[0].day.mintemp_c || '';
    const tempMax = props.weatherApi?.forecast?.forecastday[0].day.maxtemp_c || '';
    const feelslike = props.weatherApi?.current?.feelslike_c || '';
    const humidity = props.weatherApi?.current?.humidity || '';
    const is_day = props.weatherApi?.current?.is_day || '';
    const precip_in = props.weatherApi?.current?.precip_in || '';
    const pressure_in = props.weatherApi?.current?.pressure_in || '';
    const vis_km = props.weatherApi?.current?.vis_km || '';
    const wind_degree = props.weatherApi?.current?.wind_degree || '';
    const wind_dir = props.weatherApi?.current?.wind_dir || '';
    const wind_kph = props.weatherApi?.current?.wind_kph || '';
    const iconUrl = props.weatherApi?.current?.condition.icon || '';
    const text = props.weatherApi?.current?.condition.text || '';
    const dateToDay = new Date(props?.weatherApi?.forecast?.forecastday[0]?.date_epoch   * 1000).getDate()
    const weekDay = new Date(props?.weatherApi?.forecast?.forecastday[0]?.date_epoch   * 1000).getDay()



    return (
        <main className={stateSeason}>
            <div className="block-cards">
                < Day1 weatherApi={props.weatherApi}/>
                < Day2 weatherApi={props.weatherApi}/>
                < Day3 weatherApi={props.weatherApi}/>
                < Day4 weatherApi={props.weatherApi}/>
                < Day5 weatherApi={props.weatherApi}/>
                
            </div>
            <div className="weather-info-block">
                швидкість вітру: {wind_kph}<br />
                напрямок вітру за компасом: {wind_dir}<br />
                напрямок вітру в градусах: {wind_degree}<br />
                видимість {vis_km}<br />
                атмосферний тиск: {pressure_in}<br />
                кількість опадів: {precip_in}<br />
                день чи ніч: {is_day === 0 ? 'Day' : 'Hight'}<br />
                вологість повітря у відсотках: {humidity}<br />
                відчутність тепла: {feelslike}<br />
                похмуро чи ясно : {text}<br />
                mintemp: {tempMin}<br />
                maxtemp: {tempMax}<br />
                поточна температура: {temp}
                дата сьогодні: {dateToDay}<br />
                День тижня: {weekDay} < br />
                <img src={iconUrl} alt="icon" />
            </div>
        </main>
    )
}