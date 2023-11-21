import React, { useState, useEffect } from 'react'
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { Aside } from './Aside/Aside';
import './App.css'


function App() {
  const [dataApi, setDataApi] = useState({})
  const [nameCity, setNameCity] = useState('kyiv');

  console.log(dataApi)


  const getCityName = dataApi?.location?.name || 'Location or name is not available';
  const getCountry = dataApi?.location?.country || '';
  const getRegion = dataApi?.location?.region || '';


  useEffect(() => {
    async function fetchData() {
      try {
        const weatherApi = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=52d9f961032045a097064443231911&q=${nameCity}&days=5`)
        const resp = await weatherApi.json()
        setDataApi(resp)
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }
    fetchData()
  }, [nameCity])


  const handlerCityChange = (sity) => {
    setNameCity(sity)
  }

  return (
    <div className="wrapper">
      < Header
        onCityChange={handlerCityChange}
        nameCity={getCityName}
        country={getCountry}
        region={getRegion}
      />
      <div className="main-container">
        < Main weatherApi={dataApi} />
        < Aside />
      </div>
      < Footer />
    </div>
  )

}

export default App
