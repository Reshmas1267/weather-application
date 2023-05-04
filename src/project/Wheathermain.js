
import { useState } from "react";
import Wheather from "./Wheather";

function Wheatherapp() {
    const [query, setQuery] = useState("")
    const [weather,setWeather] = useState({})
    const change =(e)=>{
        console.log(e.target.value)
        setQuery(e.target.value)
        
        
    }
    const search = async (e) => {
        if (e.code === "Enter") {
            let data = await Wheather(query)
            setWeather(data)
        }
    }
    return (
        <div>
            <input type="text" value={query} onChange={change} onKeyPress={search} placeholder="Enter city name" />
{ weather.main &&
            <div className="weather_data">
                <div id="city">
                    {weather.name}<span>{weather.sys.country}</span>
                </div>
                <div id="temp">
                    {Math.round(weather.main.temp)}<span>&deg;C</span>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                    <div id="info">{weather.weather[0].description}</div>
                    <div id="presure">1012 mbars</div>
                    <div id="humiditt"> 10.12 hrs</div>
                    <div id="wind">2345 km/h</div>
                </div>
            </div>
}





        </div>

    )
}
export default Wheatherapp;