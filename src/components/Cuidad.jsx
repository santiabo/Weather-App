import React from "react";

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
                <div className="container">
                    <h1>{city.name}</h1>
                    <div className="info">
                        <div>Temp: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Clouds: {city.clouds}</div>
                        <div>Lat: {city.latitud}º</div>
                        <div>Long: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}