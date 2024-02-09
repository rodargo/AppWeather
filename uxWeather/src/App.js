import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from './imgs/background1.png';

import btn1 from './icons/temp.png';
import btn2 from './icons/humidity.png';
import btn3 from './icons/wind.png';


import './App.css';

function App() {


  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.toLocaleString('es-ES', { month: 'long' });
  const anio = fecha.getFullYear();

  // Formatear la fecha
  const fechaFormateada = `${dia} ${mes} ${anio}`;

  const [data, setData] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:3001/202')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, [])


  //  <p>Temperatura: {data.main.temp - 273.15}°C</p>
  //  <p>Humedad: {data.main.humidity}%</p>
  //  <p>Velocidad: {data.wind.speed}</p>

  return (
    <div className="App">

      <div className="App-header">

        <div class="header-txt">
          <div id="t1">  {data.name} </div>
          <div id="t2"> {fechaFormateada} </div>
          <div id="t3"> {data.main.temp - 273.15}C&deg; </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />

        <div class="info-txt">

        <ul class="lista">
            <li>
            <div class="contenido">
              <div id="t1"><img src={btn1} className="App-logo" alt="logo" /> </div>
              <div id="t2">Temperatura:</div>
              <div id="t3">{data.main.temp - 273.15}C&deg; </div>
              </div>
            </li>
            <li>
            <div class="contenido">
              <div id="t1"><img src={btn2} className="App-logo" alt="logo" /> </div>
              <div id="t2">Humedad:</div>
              <div id="t3">{data.main.humidity}%</div>
              </div>
            </li>
            <li>
            <div class="contenido">
              <div id="t1"><img src={btn3} className="App-logo" alt="logo" /> </div>
              <div id="t2">Velocidad del Viento:</div>
              <div id="t3">{data.wind.speed}</div>
              </div>
            </li>           
          </ul>

        </div>



      </div>
    </div>
  );

}

export default App;
