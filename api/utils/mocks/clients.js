const clientsMock = [
  {
    name: 'Jeff',
    typeOfArrangement: 'Bytecard',
    value: 97310,
    payment: 80978,
    phone: '646-777-1166',
    description:
      'risus semper porta volutpat quam pede lobortis ligula sit amet',
    date:
      'in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor',
  },
  {
    name: 'Mitch',
    typeOfArrangement: 'Voltsillam',
    value: 54377,
    payment: 27516,
    phone: '381-276-3500',
    description:
      'dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices',
    date:
      'a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum',
  },
  {
    name: 'Eve',
    typeOfArrangement: 'Hatity',
    value: 92845,
    payment: 54876,
    phone: '627-151-8291',
    description:
      'aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam',
    date:
      'venenatis non sodales sed tincidunt eu felis fusce posuere felis sed',
  },
  {
    name: 'Karla',
    typeOfArrangement: 'Temp',
    value: 96927,
    payment: 54506,
    phone: '374-732-4543',
    description:
      'consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus',
    date:
      'id luctus nec molestie sed justo pellentesque viverra pede ac diam cras',
  },
  {
    name: 'Bartie',
    typeOfArrangement: 'Bigtax',
    value: 96726,
    payment: 42351,
    phone: '516-251-2054',
    description:
      'tortor quis turpis sed ante vivamus tortor duis mattis egestas',
    date:
      'at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum',
  },
];

// Me permiter crear clientes filtrados
const filteredClientsMock = (name) => {
  // Me retorna
  console.log(name);
  return clientsMock.filter((client) => client.name.includes(name));
};

// Mock de mis servicios
class ClientsServiceMock {
  async getClients() {
    // Cada vez que llamemos get clients va a retornar el mock de los clients
    return Promise.resolve(clientsMock);
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
