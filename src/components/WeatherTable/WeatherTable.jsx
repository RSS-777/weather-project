import React, { useContext } from 'react';
import './WeatherTable.css';
import { WeatherContext } from '../../context/weatherContext';
import { ThemeContext } from '../../context/themeContext';

const Table = () => {
    const { data, indexCard } = useContext(WeatherContext)
    const { theme } = useContext(ThemeContext)

    if (!data || !data.forecast || !data.forecast.forecastday || !data.forecast.forecastday[0].hour) {
        return <p>Loading...</p>
    }

    const dayData = data.forecast.forecastday[indexCard];
    const hours = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

    return (
        <table>
            <thead>
                <tr>
                    <th className={theme === 'white' ? 'title-white' : 'title-dark'}>Параметри</th>
                    {hours.map((hour, index) => (
                        <th key={index} className={theme === 'white' ? 'title-white' : 'title-dark'}>{hour}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='title-table'>Хмарність</td>
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
                    <td className='title-table'>Teмпература</td>
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
                    <td className='title-table'>Швидкість вітру км/час</td>
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
                    <td className='title-table'>Напрямок вітру</td>
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
                    <td className='title-table'>Видимість</td>
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
                    <td className='title-table'>Атмосферний тиск</td>
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
                    <td className='title-table'>Вологість повітря</td>
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
                    <td className='title-table'>Відчутність тепла</td>
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
                    <td className='title-table'>Погодні умови</td>
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