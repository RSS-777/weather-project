import React, { useState, useEffect } from 'react';
import './WeatherBlock.css';
import { date } from '../utils/date';
import Day1 from '../card-components/Day1';
import Day2 from '../card-components/Day2';
import Day3 from '../card-components/Day3';
import Day4 from '../card-components/Day4';
import Day5 from '../card-components/Day5';
import Table from '../Table/Table';

export const WeatherBlock = () => {
    const [stateSeason, setStateSeason] = useState('');

    useEffect(() => {
        setStateSeason(date.season)
    }, [])

    return (
        <main className={stateSeason}>
            <div className="block-cards">
                < Day1 />
                < Day2 />
                < Day3 />
                < Day4 />
                < Day5 />
            </div>
            <div className="weather-info-block">
                < Table />
            </div>
        </main>
    )
}