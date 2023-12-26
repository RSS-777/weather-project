import { useState, useEffect, useContext, useRef } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import { WeatherTable } from '../WeatherTable/WeatherTable';
import { WeatherCard } from '../WeatherCard/WeatherCard';
import { ButtonChangeNumberDay } from '../ButtonChangeNumberDay/ButtonChangeNumberDay'
import { date } from '../../utils/date';
import { useSelector } from 'react-redux';
import './WeatherBlock.css';

export const WeatherBlock = () => {
    const { data, setIndexCard } = useContext(WeatherContext);
    const theme = useSelector((state) => state.theme.value);
    const [stateSeason, setStateSeason] = useState('');
    const [changeNumberDays, setChangeNumberDays] = useState(3);
    const [activeCard, setActiveCard] = useState(0)
    const combinedClasses = `cards active-block`;

    const changeFocus = (index) => {
        setIndexCard(index)
        setActiveCard(index)
    };

    const changeShowTreeDays = () => {
        setChangeNumberDays(3)
        changeFocus(0)
    };

    const changeShowFiveDays = () => {
        setChangeNumberDays(5)
        changeFocus(0)
    };

    const changeShowSevenDays = () => {
        setChangeNumberDays(7)
    };

    useEffect(() => {
        setStateSeason(date.season)
    }, [])

    const placeholderDayData = {
        date_epoch: null,
        day: {
            condition: {
                icon: 'https://i.gifer.com/VAyR.gif'
            },
            avgtemp_c: null,
            mintemp_c: null,
            maxtemp_c: null
        },
    };

    if (!data || !data.forecast || !data.forecast.forecastday) {
        const forecastDays = Array.from({ length: changeNumberDays }, (_, index) => ({ ...placeholderDayData }));

        return (
            <main className={theme === 'white' ? stateSeason : 'season-dark'}>
                <ButtonChangeNumberDay
                    changeShowTreeDays={changeShowTreeDays}
                    changeShowFiveDays={changeShowFiveDays}
                    changeShowSevenDays={changeShowSevenDays}
                    theme={theme}
                />
                <div className="block-cards">
                    {forecastDays.map((dayData, index) => (
                        <WeatherCard
                            dayData={dayData}
                            key={index}
                            index={index}
                            className={`cards`}
                        />
                    ))}
                </div>
                <div className="weather-info-block">
                    <WeatherTable />
                </div>
            </main>
        )
    };

    const forecastDays = data.forecast.forecastday.slice(0, changeNumberDays);

    return (
        <main className={theme === 'white' ? stateSeason : 'season-dark'}>
            <ButtonChangeNumberDay
                changeShowTreeDays={changeShowTreeDays}
                changeShowFiveDays={changeShowFiveDays}
                changeShowSevenDays={changeShowSevenDays}
                theme={theme}
            />
            <div className="block-cards">
                {forecastDays.map((dayData, index) => (
                    <WeatherCard
                        dayData={dayData}
                        key={index}
                        index={index}
                        onClick={() => changeFocus(index)}
                        className={activeCard === index ? combinedClasses : `cards`}
                    />
                ))}
            </div>
            <div className="weather-info-block">
                <WeatherTable />
            </div>
        </main>
    )
};