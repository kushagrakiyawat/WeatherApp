import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        temp: 29.05,
        tempMin: 29.05,
        tempMax: 29.05,
        humidity: 26,
        feelsLike: 27.71,
        weather: "haze"
    })

    let updateInfo=(newInfo) => {
        setWeatherInfo(newInfo);

    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}