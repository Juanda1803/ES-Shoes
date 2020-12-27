// Lib official from mongodb
const { MongoClient, ObjectId } = require('mongodb');
const config = require('../config');

// Caracters specials
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);

// MONGO URL
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

// LIB MONGO
class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      // Have the end mongo config
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.dbName = DB_NAME;
  }

  // Connection with promise to data base
  connect() {
    // Patron Singleton
    if (!MongoLib.connection) {
      // Promise with Async/Await
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            reject(err);
          }

          console.log('Connected succesfully to mongo');
          resolve(this.client.db(this.dbName));
        });
      });
    }

    return MongoLib.connection;
  }

  // ------------Implementacion de Acciones---------

  // GET ALL obtenemos toda la conexion
  getAll(collection, query) {
    return this.connect().then((db) => {
      // db.collection(collection) me crea una nueva coleccion con el nombre 'clients'
      // db es la respuesta a la peticion a la base de datos
      // db.collection.find() realiza una consulta sobre toda la coleccion o vista
      return db.collection(collection).find(query).toArray();
    });
  }

  // GET obtenemos una sola conexion
  get(collection, id) {
    return this.connect().then((db) => {
      // db.collection.findOne() realiza una consulta y devulve un solo documento
      return db.collection(collection).findOne({ _id: ObjectId(id) });
    });
  }

  // POST Creamos una nueva conexion
  create(collection, data) {
    return this.connect()
      .then((db) => {
        // db.collection.insertOne() inserta nuevos datos a la base de datos
        return db.collection(collection).insertOne(data);
      })
      .then((result) => result.insertedId);
  }

  // PUT Actualizar un dato de una conexion
  update(collection, id, data) {
    return this.connect()
      .then((db) => {
        // db.collection.update() actualiza con tres parametros la data
        // (1,2,3)
        // 1 => recibe un id de la data para actulizar
        // 2 => con $set actuliza la data en la base de datos
        // 3 => con upsert determina lo que se actuliza e inserta
        return db
          .collection(collection)
          .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
      })
      .then((result) => result.upsertedId || id);
  }

  // PUT Actualizar un dato de una conexion
  updatePatch(collection, id, data) {
    return this.connect()
      .then((db) => {
        // db.collection.update() actualiza con tres parametros la data
        // (1,2,3)
        // 1 => recibe un id de la data para actulizar
        // 2 => con $set actuliza la data en la base de datos
        // 3 => con upsert determina lo que se actuliza e inserta
        return db
          .collection(collection)
          .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
      })
      .then((result) => result.upsertedId || id);
  }

  // DELETE Elimina una conexion
  delete(collection, id) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).deleteOne({ _id: ObjectId(id) });
      })
      .then(() => id);
  }
}

module.exports = MongoLib;
