 

const serviceWeatherData = require('../data/ServiceWeatherData');

class WeatherController{

    constructor(){
        this.serviceWeatherData = new serviceWeatherData;
    }    

    async getWeatherForName(value, callback){
        const num = parseInt(value);
        const filter = {cod:num};
        await this.serviceWeatherData.findWeather(filter, (error, document) => {
            if (error) {
                callback(error, null);
                console.error('Hubo un error:', error);
            } else {
                callback(null, document);
            }
        });
    }    
}

module.exports = WeatherController; 