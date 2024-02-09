const { MongoClient } = require('mongodb');

class MongoDBConnection {

    constructor(uri, dbName) {
        this.uri = uri;
        this.dbName = dbName;
        this.client = null;
        this.db = null;
    }

    async connect() {

        try {
            this.client = await MongoClient.connect(this.uri);
            //console.log('Conexión exitosa a la base de datos');
            this.db = this.client.db(this.dbName);
        
        } catch (err) {
            console.error('Error al conectar a la base de datos:', err);
            throw err; // Re-lanzar el error para manejarlo en la función principal
        }
    
    }

    async findOne(collectionName, filter) {
        
        try {
            
            if (!this.db) {
                throw new Error('La conexión a la base de datos no está establecida');
            }
            
            const collection = this.db.collection(collectionName);
            return await collection.findOne(filter);

        } catch (err) {
            console.error('Error al buscar documento:', err);
            throw err; // Re-lanzar el error para manejarlo en la función principal
        }

    }

    async disconnect() {
        try {
            if (this.client) {
                await this.client.close();
                //console.log('Desconexión exitosa de la base de datos');
            }
        } catch (err) {
            console.error('Error al desconectar de la base de datos:', err);
            throw err; // Re-lanzar el error para manejarlo en la función principal
        }
    }
}

module.exports = MongoDBConnection; 

