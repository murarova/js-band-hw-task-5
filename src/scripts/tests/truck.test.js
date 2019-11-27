import Truck from '../vehicles/truck';

test('class Truck return an new truck', () => {
  const newTruck = new Truck(
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

test('newTruck have a showCapacityInPounds', () => {
  const newTruck = new Truck(
    'Truck',
    'model',
    '1999',
    '50',
    '100',
    '200',
    'gas',
  );
  const capacityInPounds = newTruck.showCapacityInPounds();

  expect(capacityInPounds).toEqual(50 * 2.20462);
});

test('newTruck has a showAverageSpeed method', () => {
  const newTruck = new Truck(
    'Truck',
    'model',
    '1999',
    '50',
    '100',
    '200',
    'gas',
  );
  const averageSpeed = newTruck.showAverageSpeed();

  expect(averageSpeed).toEqual('100 km');
});
