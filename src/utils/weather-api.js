


async function weatherData(){
  const weatherApi = await fetch('http://api.weatherapi.com/v1/current.json?key=52d9f961032045a097064443231911&q=London')
  const resp = await weatherApi.json()
  return resp
}


weatherData()

export default weatherData