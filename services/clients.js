// Nos traemos el objeto clase MongoLib
const MongoLib = require('../lib/mongo');
const { clientsMock } = require('../utils/mocks/clients');

class ClientsService {
  constructor() {
    // Colleccion
    this.collection = 'clients';
    // Instanciamos nuestra libreria de mongo
    this.mongoLib = new MongoLib();
  }
  async getClients({ tags }) {
    // Si existen los tags le pasamos una query que va a recibir mongo que es { tags: { $in:tags } }
    const query = tags && { tags: { $in: tags } };
    const clients = await this.mongoLib.getAll(this.collection, query);
    return clients || [];
  }

  async getClient({ clientId }) {
    // Obtenemos un solo cliente
    const client = await this.mongoLib.get(this.collection, clientId);
    return client || {};
  }

  async createClient({ client }) {
    // Creamos un nuevo cliente
    const createdClientId = await this.mongoLib.create(this.collection, client);
    return createdClientId || {};
  }

  async updateClient({ clientId, client } = {}) {
    // Actulizamos la informacion del cliente con el id y la data
    const updatedClientId = await this.mongoLib.update(
      this.collection,
      clientId,
      client
    );
    return updatedClientId || {};
  }

  async deleteClient({ clientId }) {
    // Eliminamos la informacion del cliente
    const deletedClientId = await this.mongoLib.delete(
      this.collection,
      clientId
    );
    return deletedClientId || {};
  }
}

module.exports = ClientsService;
