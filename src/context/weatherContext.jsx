import { createContext, useContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [nameCity, setNameCity] = useState('Kyiv');

    useEffect(() => {
        async function loadData() {
            try {
                const weatherApi = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=52d9f961032045a097064443231911&q=${nameCity}&days=7&lang=uk`)
                const resp = await weatherApi.json()
                setData(resp)
            } catch (error) {
                console.log('Error fetching data:', error)
            }
        }
        loadData()
    }, [nameCity])

    return (
        <WeatherContext.Provider value = {{ data, setNameCity }}>
            {children}
        </WeatherContext.Provider>
    )
};