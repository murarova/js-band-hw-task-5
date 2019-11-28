import Cost from '../cost';

test('class Cost return an new Cost', () => {
  const newCost = new Cost('Ship', '50', '100');
  expect(newCost).toEqual({
    model: 'Ship',
    costByKg: '50',
    costByKm: '100'
  });
});
