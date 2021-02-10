import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Cuidad.jsx';
import { Route } from 'react-router-dom';
require('dotenv').config();
//{API_KEY}  = process.env.API_KEY;
API_KEY = "b6c9e93187f74cb27a31cae85a1ee529";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Route
         path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
      <Route 
        exact path='/'
        render={() => <Cards cities={cities} onClose={onClose}/>}
      />
      <Route
        path='/about'
       component={About}
      />
      <Route
        exact
       path='/ciudad/:ciudadId'
       render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
           
      />
      
    </div>
  );
}

export default App;
