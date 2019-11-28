import vehicleFactory from '../services/factory';

test('class vehicleFactory return an new ship', () => {
  const newShip = vehicleFactory.create(
    'Ship',
    'model',
    'name',
    '1999',
    '20',
    '80',
    '5',
  );
  expect(newShip).toEqual({
    shipType: 'Ship',
    model: 'model',
    name: 'name',
    producedYear: '1999',
    capacity: '20',
    averageSpeed: '80',
    countOfTeam: '5',
  });
});

test('class vehicleFactory return an new truck', () => {
  const newTruck = vehicleFactory.create(
    'Truck',
    'model',
    '1999',
    '50',
    '100',
    '200',
    'gas',
  );
  expect(newTruck).toEqual({
    truckType: 'Truck',
    model: 'model',
    producedYear: '1999',
    capacity: '50',
    averageSpeed: '100',
    licensePlate: '200',
    typeOfGas: 'gas',
  });
});
