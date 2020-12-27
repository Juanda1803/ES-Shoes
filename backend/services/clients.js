const MongoLib = require('../lib/mongo');

class ClientsService {
  constructor() {
    this.collection = 'clients';
    this.mongoDB = new MongoLib();
  }

  // GET ALL
  async getAllClients({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const clients = await this.mongoDB.getAll(this.collection, query);
    return clients || [];
  }

  // GET
  async getClient({ clientId }) {
    const client = await this.mongoDB.get(this.collection, clientId);
    return client || {};
  }

  // POST
  async createClient({ client }) {
    const createdClientId = await this.mongoDB.create(this.collection, client);
    return createdClientId;
  }

  // PUT
  async updateClient({ clientId, client }) {
    const updatedClientId = await this.mongoDB.update(
      this.collection,
      clientId,
      client
    );
    return updatedClientId;
  }

  // PATCH
  async updatePatchClient({ clientId, client }) {
    const updatedClientId = await this.mongoDB.update(
      this.collection,
      clientId,
      client
    );
    return updatedClientId;
  }

  // DELETE
  async deleteClient({ clientId }) {
    const deletedClientId = await this.mongoDB.delete(
      this.collection,
      clientId
    );
    return deletedClientId;
  }
}

module.exports = ClientsService;
