
const mongoDBConnection = require('./MongoDBConnection');
const weatherData = require('../model/WeatherData');
const uri = 'mongodb://root:root@localhost:27017';
const dbName = 'weather';
 
class ServiceWeatherData {

    constructor(){
         this.mongoConnection = new mongoDBConnection(uri, dbName);
    }

    async findWeather(filter, callback) {
        try {
            await this.mongoConnection.connect();
            const collectionName = 'weatherData';
            const document = await this.mongoConnection.findOne(collectionName, filter);
            //console.log('Documento encontrado:', document);
            await this.mongoConnection.disconnect();
            // Llamar al callback con el documento encontrado
            if ( document == null){ 
                callback(null, null);
            }else{
                callback(null, new weatherData( document) );
            }
            
        } catch (err) {
            console.error('Error en la aplicación:', err);
            // Llamar al callback con el error
            callback(err, null);
        }
    }
      
}

module.exports = ServiceWeatherData;

 


