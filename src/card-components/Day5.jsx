import { date } from '../utils/date'

 const Day5 = (props) => {
    const tempMin = props.weatherApi?.forecast?.forecastday[4].day.mintemp_c || '';
    const tempMax = props.weatherApi?.forecast?.forecastday[4].day.maxtemp_c || '';
    const iconUrl = props.weatherApi?.forecast?.forecastday[4].day.condition.icon;
    const dateToDay = new Date(props?.weatherApi?.forecast?.forecastday[4]?.date_epoch * 1000).getDate()
    return (
        <div className="cards5">
            <h3>{date.nameWeek} <br /> {dateToDay}</h3>
            <img src={iconUrl} alt="Image weather" />
            <div className='temperature'>
                <div className="degrees-celsius">
                    <div className="degrees-min">Min<br /> <span>{tempMin}</span><sup>&deg;</sup></div>
                    <div className="degrees-max">Max<br /> <span>{tempMax}</span><sup>&deg;</sup></div>
                </div>
            </div>
            <div className='month'>{date.month}</div>
        </div>
    )
}

export default Day5;