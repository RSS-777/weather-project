import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import { useSelector } from 'react-redux';
import './WeatherTable.css';

export const WeatherTable = () => {
    const { data, indexCard } = useContext(WeatherContext);
    const theme = useSelector((state) => state.theme.value);

    if (!data || !data.forecast || !data.forecast.forecastday || !data.forecast.forecastday[0].hour) {
        return <p className='loading-table'>Loading...</p>;
    };

    const dayData = data.forecast.forecastday[indexCard];
    const hours = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

    const renderDataCell = (property) => {
        return hours.map((hour, index) => {
            const hourData = dayData.hour.find(item => item.time === `${dayData.date} ${hour}`);
            return (
                <td key={index}>
                    {hourData
                        ? property(hourData)
                        : <span>Немає даних</span>
                    }
                </td>
            );
        });
    };

    const tableRows = [
        { title: 'Хмарність', property: (hourData) => <img src={hourData.condition.icon} alt='Іконка погоди' /> },
        { title: 'Температура \u00B0C', property: (hourData) => hourData.temp_c },
        { title: 'Швидкість вітру км/год', property: (hourData) => hourData.wind_kph },
        { title: 'Напрямок вітру', property: (hourData) => hourData.wind_dir },
        { title: 'Видимість', property: (hourData) => hourData.vis_km },
        { title: 'Атмосферний тиск', property: (hourData) => hourData.pressure_in },
        { title: 'Вологість повітря', property: (hourData) => hourData.humidity },
        { title: 'Відчутність тепла', property: (hourData) => hourData.feelslike_c },
        { title: 'Погодні умови', property: (hourData) => hourData.condition.text },
    ];

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
                {tableRows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td className='title-table'>{row.title}</td>
                        {renderDataCell(row.property)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};