const Day3 = (props) => {
    const tempMin = props.weatherApi?.forecast?.forecastday[2].day.mintemp_c || '';
    const tempMax = props.weatherApi?.forecast?.forecastday[2].day.maxtemp_c || '';
    const iconUrl = props.weatherApi?.forecast?.forecastday[2].day.condition.icon;
    const dateToDay = new Date(props?.weatherApi?.forecast?.forecastday[2]?.date_epoch * 1000).getDate()
    const numberWeek = new Date(props?.weatherApi?.forecast?.forecastday[2]?.date_epoch * 1000).getDay()
    const numberMonth = new Date(props?.weatherApi?.forecast?.forecastday[2]?.date_epoch * 1000).getMonth()

    const monthName = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
    const month = monthName[numberMonth]

    const arrNameWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    const nameWeek = arrNameWeek[numberWeek];

    return (
        <div className="cards3">
            <h3>{nameWeek} <br /> {dateToDay}</h3>
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

export default Day3;