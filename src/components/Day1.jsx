import { useContext } from 'react';
import { WeatherContext } from '../context/weatherContext';

const Day1 = () => {
    const { data } = useContext(WeatherContext)
    console.log('Day 1', data)

    const temp = data?.current?.temp_c;
    const tempMin = data?.forecast?.forecastday[0].day.mintemp_c || '';
    const tempMax = data?.forecast?.forecastday[0].day.maxtemp_c || '';
    const iconUrl = data?.forecast?.forecastday[0].day.condition.icon || 'https://i.gifer.com/VAyR.gif';
    const dateToDay = new Date(data?.forecast?.forecastday[0]?.date_epoch * 1000).getDate() || '';
    const numberWeek = new Date(data?.forecast?.forecastday[0]?.date_epoch * 1000).getDay()
    const numberMonth = new Date(data?.forecast?.forecastday[0]?.date_epoch * 1000).getMonth()
    const monthName = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
    const month = monthName[numberMonth]

    const arrNameWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    const nameWeek = arrNameWeek[numberWeek] 


    return (
        <div className="cards1">
            <span className="today">Сьогодні</span>
            <h3 className="day-week">{nameWeek} <br /> {dateToDay}</h3>
            <img src={iconUrl} alt="Image weather" />
            <div className="temp">{temp}<sup>&deg;</sup></div>
            <div className='temperature'>
                <div className="degrees-celsius">
                    <div className="degrees-min">Min<br /><span>{tempMin}</span><sup>&deg;</sup></div>
                    <div className="degrees-max">Max<br /><span>{tempMax}</span><sup>&deg;</sup></div>
                </div>
            </div>
            <div className='month'>{month}</div>
        </div>
    )
}

export default Day1;






