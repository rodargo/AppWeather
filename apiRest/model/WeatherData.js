
const weather = require('./Weather');

 class WeatherData {
    
    constructor(data) {
        
        this.weather = new weather(data.weather); 
        this.base = data.base;
        this.main = data.main;
        this.wind = data.wind;
        this.sys  = data.sys;
        this.name = data.name;
        this.cod  = data.cod;
    }

    getTemperature(){ return this.main.temp;        }
    getHumidity()   { return this.main.humidity;    }
    getWindSpeed()  { return this.wind.speed;       }
    getCountry()    { return this.sys.country;      }
    getCityName()   { return this.name;             }
    getWeather()    { return this.weather;          }

}

module.exports = WeatherData; 