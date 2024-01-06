import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIndexCard } from '../../store/weather/weatherSlice';
import { WeatherTable } from '../WeatherTable/WeatherTable';
import { WeatherCard } from '../WeatherCard/WeatherCard';
import { ButtonChangeNumberDay } from '../ButtonChangeNumberDay/ButtonChangeNumberDay'
import { date } from '../../utils/date';
import './WeatherBlock.css';

export const WeatherBlock = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.weather.data);
    const theme = useSelector((state) => state.theme.value);
    const status = useSelector((state) => state.weather.status);
    const error = useSelector((state) => state.weather.error);
    const [stateSeason, setStateSeason] = useState('');
    const [changeNumberDays, setChangeNumberDays] = useState(3);
    const [activeCard, setActiveCard] = useState(0)
    const combinedClasses = `cards active-block`;

    const changeFocus = (index) => {
        dispatch(setIndexCard(index))
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
        const currentSeason = date();
        setStateSeason(currentSeason.season)
    }, [])

    const forecastDays = data?.forecast?.forecastday.slice(0, changeNumberDays);
    return (
        <main className={theme === 'white' ? stateSeason : 'season-dark'}>
            {status === 'loading' && (
                <div className='loading-data'>
                    <span>Loading...</span>
                    <img src="https://i.gifer.com/VAyR.gif" alt="Іконка загрузки" />
                </div>
            )}
            {status === 'succeeded' && forecastDays && (
                <>
                    <ButtonChangeNumberDay
                        changeShowTreeDays={changeShowTreeDays}
                        changeShowFiveDays={changeShowFiveDays}
                        changeShowSevenDays={changeShowSevenDays}
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
                </>
            )}
            {status === 'failed' &&
                <div className='failed-data'>
                    <p>Сталася помилка: {error}</p>
                    <p>Будь ласка, перевірте правильність введеного місця для погоди і спробуйте ще раз.</p>
                </div>
            }
        </main>
    )
};