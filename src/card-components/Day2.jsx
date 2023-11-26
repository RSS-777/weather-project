import { useContext } from 'react';
import { WeatherContext } from '../context/weatherContext';

const Day2 = () => {
    const { data } = useContext(WeatherContext)
    const tempMin = data?.forecast?.forecastday[1].day.mintemp_c || '';
    const tempMax = data?.forecast?.forecastday[1].day.maxtemp_c || '';
    const iconUrl = data?.forecast?.forecastday[1].day.condition.icon || 'https://i.gifer.com/VAyR.gif';
    const dateToDay = new Date(data?.forecast?.forecastday[1]?.date_epoch * 1000).getDate() || '';
    const numberWeek = new Date(data?.forecast?.forecastday[1]?.date_epoch * 1000).getDay()
    const numberMonth = new Date(data?.forecast?.forecastday[1]?.date_epoch * 1000).getMonth()

    const monthName = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
    const month = monthName[numberMonth]

    const arrNameWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    const nameWeek = arrNameWeek[numberWeek];

    return (
        <div className="cards2">
            <h3 className="day-week">{nameWeek} <br /> {dateToDay}</h3>
            <img src={iconUrl} alt="Image weather" />
            <div className='temperature'>
                <div className="degrees-celsius">
                    <div className="degrees-min">Min<br /> <span>{tempMin}</span><sup>&deg;</sup></div>
                    <div className="degrees-max">Max<br /> <span>{tempMax}</span><sup>&deg;</sup></div>
                </div>
            </div>
            <div className='month'>{month}</div>
        </div>
    )
}

export default Day2;