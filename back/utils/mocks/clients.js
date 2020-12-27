const clientsMock = [
  {
    _id: '5fe7588ba108937ca855a2c2',
    name: 'Evesssssss',
    typeOfArrangement: 'Hatity',
    value: 92845,
    payment: 54876,
    phone: '3023455882',
    description:
      'aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam',
    date: '2021-01-01T00:00:00.000Z',
  },
  {
    _id: '5fe75893a108937ca855a2c3',
    name: 'Sandra',
    typeOfArrangement: 'Hatity',
    value: 92845,
    payment: 54876,
    phone: '3023455882',
    description:
      'aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam',
    date: '2021-01-01',
  },
];

// Allows me to create filtered clients
const filteredClientsMock = (name) => {
  // Returns me
  // console.log(name);
  return clientsMock.filter((client) => client.name.includes(name));
};

// Mock of my services
class ClientsServiceMock {
  async getAllClients() {
    // Cada vez que llamemos get clients va a retornar el mock de los clients
    return Promise.resolve(clientsMock);
  }
  async getClient() {
    return Promise.resolve(clientsMock[0]);
  }

  async createClient() {
    // Cada vez que llamemos createClients me va retornan el primer clientes del mock
    return Promise.resolve(clientsMock[0]);
  }
}

module.exports = {
  clientsMock,
  filteredClientsMock,
  ClientsServiceMock,
};
