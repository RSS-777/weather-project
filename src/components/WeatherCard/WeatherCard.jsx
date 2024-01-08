import './WeatherCard.css';

const monthName = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
const arrNameWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];

export const WeatherCard = ({ dayData, index, onClick, className }) => {
    return (
        <div
            onClick={onClick}
            className={className}
        >
            {index === 0 && <span className='today'>Cьогодні</span>}
            <span className="day-week">{
                dayData.date_epoch !== null
                    ? arrNameWeek[new Date(dayData.date_epoch * 1000).getDay()]
                    : null}
            </span>
            <h3 className='day-month'>{
                dayData.date_epoch !== null
                    ? new Date(dayData.date_epoch * 1000).getDate()
                    : null}
            </h3>
            <img src={dayData.day.condition.icon} alt="Image weather" />
            <div className="temp-day">
                {dayData.day.avgtemp_c !== null && <span>{dayData.day.avgtemp_c}&deg;C</span>}
            </div>
            <div>
                <div className="degrees-celsius">
                    <div className="degrees-min">
                        {dayData.day.mintemp_c !== null && <span> Min<br /><span>{dayData.day.mintemp_c}</span><sup>&deg;</sup></span>}
                    </div>
                    <div className="degrees-max">
                        {dayData.day.maxtemp_c !== null && <span>Max<br /><span>{dayData.day.maxtemp_c}</span><sup>&deg;</sup></span>}
                    </div>
                </div>
            </div>
            <div className='month'>{monthName[dayData.date && dayData.date.split('-')[1] - 1]}</div>
        </div>
    )
}
