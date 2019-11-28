import Ship from '../vehicles/ship';

test('class Ship return an new ship', () => {
  const newShip = new Ship('Ship', 'model', 'name', '1999', '20', '80', '5');
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

test('newShip has a showCapacityInPounds', () => {
  const newShip = new Ship('Ship', 'model', 'name', '1999', '20', '80', '5');
  const capacityInPounds = newShip.showCapacityInPounds();

  expect(capacityInPounds).toEqual(20 * 2.20462);
});

test('newShip has a showAverageSpeed method', () => {
  const newShip = new Ship('Ship', 'model', 'name', '1999', '20', '80', '5');
  const averageSpeed = newShip.showAverageSpeed();

  expect(averageSpeed).toEqual('80 nm');
});
