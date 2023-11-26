import React, { useContext } from 'react';
import './Table.css';
import { WeatherContext } from '../context/weatherContext';

const Table = () => {
    const { data } = useContext(WeatherContext)

    if (!data || !data.forecast || !data.forecast.forecastday || !data.forecast.forecastday[0].hour) {
        return <p>Loading...</p>
    }
    const locationName = data.location.name
    const dayData = data.forecast.forecastday[0];
    const hours = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

    return (
        <table>
            <thead>
                <tr>
                    <th>Параметри</th>
                    {hours.map((hour, index) => (
                        <th key={index}>{hour}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Хмарність</td>
                    {hours.map((hour, index) => {
                        const hourData = dayData.hour.find(item => item.time === `${dayData.date} ${hour}`)
                        return (
                            <td key={index}>
                                {hourData
                                    ? <img src={hourData.condition.icon} alt='Іконка погди' />
                                    : <span>Немає даних</span>
                                }
                            </td>
                        )
                    })}
                </tr>
                <tr>
                    <td>Teмпература</td>
                    {hours.map((hour, index) => {
                        const hourData = dayData.hour.find(item => item.time === `${dayData.date} ${hour}`)
                        return (
                            <td key={index}>
                                {hourData
                                    ? hourData.temp_c
                                    : <span>Немає даних</span>
                                }
                            </td>
                        )
                    })}
                </tr>
                <tr>
                    <td>Швидкість вітру км/час</td>
                    {hours.map((hour, index) => {
                        const hourData = dayData.hour.find(item => item.time === `${dayData.date} ${hour}`)
                        return (
                            <td key={index}>
                                {hourData
                                    ? hourData.wind_kph
                                    : <span>Немає даних</span>
                                }
                            </td>
                        )
                    })}
                </tr>
                <tr>
                    <td>Напрямок вітру</td>
                    {hours.map((hour, index) => {
                        const hourData = dayData.hour.find(item => item.time === `${dayData.date} ${hour}`)
                        return (
                            <td key={index}>
                                {hourData
                                    ? hourData.wind_dir
                                    : <span>Немає даних</span>
                                }
                            </td>
                        )
                    })}
                </tr>
                <tr>
                    <td>Видимість</td>
                    {hours.map((hour, index) => {
                        const hourData = dayData.hour.find(item => item.time === `${dayData.date} ${hour}`)
                        return (
                            <td key={index}>
                                {hourData
                                    ? hourData.vis_km
                                    : <span>Немає даних</span>
                                }
                            </td>
                        )
                    })}
                </tr>
                <tr>
                    <td>Атмосферний тиск</td>
                    {hours.map((hour, index) => {
                        const hourData = dayData.hour.find(item => item.time === `${dayData.date} ${hour}`)
                        return (
                            <td key={index}>
                                {hourData
                                    ? hourData.pressure_in
                                    : <span>Немає даних</span>
                                }
                            </td>
                        )
                    })}
                </tr>
                <tr>
                    <td>Вологість повітря</td>
                    {hours.map((hour, index) => {
                        const hourData = dayData.hour.find(item => item.time === `${dayData.date} ${hour}`)
                        return (
                            <td key={index}>
                                {hourData
                                    ? hourData.humidity
                                    : <span>Немає даних</span>
                                }
                            </td>
                        )
                    })}
                </tr>
                <tr>
                    <td>Відчутність тепла</td>
                    {hours.map((hour, index) => {
                        const hourData = dayData.hour.find(item => item.time === `${dayData.date} ${hour}`)
                        return (
                            <td key={index}>
                                {hourData
                                    ? hourData.feelslike_c
                                    : <span>Немає даних</span>
                                }
                            </td>
                        )
                    })}
                </tr>
                <tr>
                    <td>Погодні умови</td>
                    {hours.map((hour, index) => {
                        const hourData = dayData.hour.find(item => item.time === `${dayData.date} ${hour}`)
                        return (
                            <td key={index}>
                                {hourData
                                    ? hourData.condition.text
                                    : <span>Немає даних</span>
                                }
                            </td>
                        )
                    })}
                </tr>
            </tbody>
        </table>
    )

}

export default Table;