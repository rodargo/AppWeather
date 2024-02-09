// index.js

const messErr = '{"error": "Ciudad no encontrada","message": "La ciudad especificada no fue encontrada en la base de datos"}';
const express = require('express');
const cors = require('cors');

const app = express(); 
app.use(cors());


// Importa el controlador
const weatherController = require('./controllers/WeatherController');

app.get('/error', (req, res) => {
    res.status(404).send('¡Error: recurso no encontrado!');
  });
  

// Controlador HTTP GET
app.get('/:city', (req, res) => {
    const city = req.params.city;
    const w = new weatherController;

    w.getWeatherForName(city, (error, document) => {
        if (error) { 
            console.error('Hubo un error:', error);
            res.status(404).send('¡Error: recurso no encontrado!');

        } else {

            if(document==null){
                res.status(400).send( messErr );
            }else{
                res.status(200).send( document );
            }

        }
    });
    
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  

// Inicia el servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
