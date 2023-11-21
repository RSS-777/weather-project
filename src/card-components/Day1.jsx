import { date } from '../utils/date'

const Day1 = (props) => {
    const temp = props.weatherApi?.current?.temp_c || '';
    const tempMin = props.weatherApi?.forecast?.forecastday[0].day.mintemp_c || '';
    const tempMax = props.weatherApi?.forecast?.forecastday[0].day.maxtemp_c || '';
    const iconUrl = props.weatherApi?.forecast?.forecastday[0].day.condition.icon;
    const dateToDay = new Date(props?.weatherApi?.forecast?.forecastday[0]?.date_epoch * 1000).getDate()
    return (
        <div className="cards1">
            <h3>{date.nameWeek} <br /> {dateToDay}</h3>
            <img src={iconUrl} alt="Image weather" />
            <div>{temp}</div>
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

export default Day1;






