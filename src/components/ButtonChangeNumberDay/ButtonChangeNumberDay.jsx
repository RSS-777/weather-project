import './ButtonChangeNumberDay.css';

export const ButtonChangeNumberDay = ({ changeShowTreeDays, changeShowFiveDays, changeShowSevenDays, theme }) => {
    return (
        <>
            <button
                className={theme === 'white' ? 'btn-changeShowThree' : 'btn-changeShowThree-dark'}
                onClick={changeShowTreeDays}>3 дні
            </button>
            <button
                className={theme === 'white' ? 'btn-changeShowFive' : 'btn-changeShowFive-dark'}
                onClick={changeShowFiveDays}>5 днів
            </button>
            <button
                className={theme === 'white' ? 'btn-changeShowSeven' : 'btn-changeShowSeven-dark'}
                onClick={changeShowSevenDays}>7 днів
            </button>
        </>
    )
}