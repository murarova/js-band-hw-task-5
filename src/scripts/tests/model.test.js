import Model from '../model';

test('Model.addCost return an new Cost', () => {
  const model = new Model();
  const newCost = model.addCost({
    model: 'Ship',
    costByKg: '50',
    costByKm: '100',
  });
  expect(newCost).toEqual({
    model: 'Ship',
    costByKg: '50',
    costByKm: '100',
  });
});

test('Model.addVehicle return an new an object with keys', () => {
  const model = new Model();
  const newCost = model.addVehicle({
    shipType: 'Ship',
    model: 'model',
    name: 'name',
    producedYear: '1999',
    capacity: '20',
    averageSpeed: '80',
    countOfTeam: '5',
  });

  const newCostKeys = Object.keys(newCost);

  expect(newCostKeys).toEqual([
    'id',
    'shipType',
    'model',
    'name',
    'producedYear',
    'capacity',
    'averageSpeed',
    'countOfTeam',
  ]);
});
