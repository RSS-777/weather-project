import { useEffect, useState } from "react";

export const useFetchWeather = () => {
    const [data, setData] = useState([])
    const [nameCity, setNameCity] = useState('kyiv')
    
    useEffect(() => {
        async function loadData() {
          try {
            const weatherApi = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=52d9f961032045a097064443231911&q=${nameCity}&days=5&lang=uk`)
            const resp = await weatherApi.json()
              setData(resp)
          } catch (error) {
            console.log('Error fetching data:', error)
          }
        }
        loadData()
      }, [nameCity])

      return {data, setNameCity}
}