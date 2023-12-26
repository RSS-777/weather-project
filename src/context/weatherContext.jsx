import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [nameCity, setNameCity] = useState('Kyiv');
    const [indexCard, setIndexCard] = useState(0);

    useEffect(() => {
        async function loadData() {
            try {
                const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
                const weatherApi = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${nameCity}&days=7&lang=uk`)
                const resp = await weatherApi.json()
                setData(resp)
            } catch (error) {
                console.log('Error fetching data:', error)
            }
        }
        loadData()
    }, [nameCity])

    return (
        <WeatherContext.Provider value={{ data, setNameCity, indexCard, setIndexCard }}>
            {children}
        </WeatherContext.Provider>
    )
};