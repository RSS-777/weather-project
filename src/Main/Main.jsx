import React, { useState, useEffect } from 'react';
import './Main.css';
import weatherData from '../utils/weather-api';
import { date } from '../utils/date'
import cloudsRain from '../icons/clouds-rain.png'
import clouds from '../icons/clouds.png';
import cloudsRainSnow from '../icons/clouds-rain-snow.png';
import direction from '../icons/direction.png';
import month from '../icons/month.png';
import rainThunderstormCoulds from '../icons/rain-thunderstorm-coulds.png';
import sunnyCloudSnow from '../icons/sunny-cloud-snow.png';
import sunnyClouds from '../icons/sunny-clouds.png';
import sunny from '../icons/sunny.png';
import thermometerCold from '../icons/thermometer-cold.png';
import thermometerHot from '../icons/thermometer-hot.png';
import wind from '../icons/wind.png';
import wind2 from '../icons/wind2.png';

export const Main = () => {
    const [stateSeason, setStateSeason] = useState('');
    useEffect(() => {
        if (date.season === 'winter') { setStateSeason('winter') }
        if (date.season === 'spring') { setStateSeason('spring') }
        if (date.season === 'summer') { setStateSeason('summer') }
        if (date.season === 'autumn') { setStateSeason('autumn') }
    }, [])

    return (
        <main className={stateSeason}>
            <h2>{date.season}</h2>
            <div className="block-cards">
                <div className="cards1">
                    <h3>Monday</h3>
                    <img src={clouds} alt="Image weather" />
                    <div className='temperature'>
                        <div className="degrees-celsius">
                            <div className="degrees-min">Min<br /> <span>10</span><sup>&deg;</sup></div>
                            <div className="degrees-max">Max<br /> <span>10</span><sup>&deg;</sup></div>
                        </div>
                    </div>
                    <div className='month'>{date.month}</div>
                </div>
                <div className="cards2">
                    <h3>Tuesday</h3>
                    <img src={cloudsRain} alt="Image weather" />
                    <div className='temperature'>
                        <div className="degrees-celsius">
                            <div className="degrees-min">Min<br /> <span>10</span><sup>&deg;</sup></div>
                            <div className="degrees-max">Max<br /> <span>10</span><sup>&deg;</sup></div>
                        </div>
                    </div>
                    <div className='month'>{date.month}</div>
                </div>
                <div className="cards3">
                    <h3>wednesday</h3>
                    <img src={clouds} alt="Image weather" />
                    <div className='temperature'>
                        <div className="degrees-celsius">
                            <div className="degrees-min">Min<br /> <span>10</span><sup>&deg;</sup></div>
                            <div className="degrees-max">Max<br /> <span>10</span><sup>&deg;</sup></div>
                        </div>
                    </div>
                    <div className='month'>{date.month}</div>
                </div>
                <div className="cards4">
                    <h3>Thursday</h3>
                    <img src={sunnyClouds} alt="Image weather" />
                    <div className='temperature'>
                        <div className="degrees-celsius">
                            <div className="degrees-min">Min<br /> <span>10</span><sup>&deg;</sup></div>
                            <div className="degrees-max">Max<br /> <span>10</span><sup>&deg;</sup></div>
                        </div>
                    </div>
                    <div className='month'>{date.month}</div>
                </div>
                <div className="cards5">
                    <h3>Friday</h3>
                    <img src={sunny} alt="Image weather" />
                    <div className='temperature'>
                        <div className="degrees-celsius">
                            <div className="degrees-min">Min<br /> <span>10</span><sup>&deg;</sup></div>
                            <div className="degrees-max">Max<br /> <span>10</span><sup>&deg;</sup></div>
                        </div>
                    </div>
                    <div className='month'>{date.month}</div>
                </div>
                <div className="cards6">
                    <h3>Saturday</h3>
                    <img src={clouds} alt="Image weather" />
                    <div className='temperature'>
                        <div className="degrees-celsius">
                            <div className="degrees-min">Min<br /> <span>10</span><sup>&deg;</sup></div>
                            <div className="degrees-max">Max<br /> <span>10</span><sup>&deg;</sup></div>
                        </div>
                    </div>
                    <div className='month'>{date.month}</div>
                </div>
                <div className="cards7">
                    <h3>Sunday</h3>
                    <div className="img"></div>
                    <img src={rainThunderstormCoulds} alt="Image weather" />
                    <div className='temperature'>
                        <div className="degrees-celsius">
                            <div className="degrees-min">Min<br /> <span>10</span><sup>&deg;</sup></div>
                            <div className="degrees-max">Max<br /> <span>10</span><sup>&deg;</sup></div>
                        </div>
                    </div>
                    <div className='month'>{date.month}</div>
                </div>
            </div>
            <div className="weather-info-block">

                 <h4>Hello</h4>
            </div>
        </main>
    )
}