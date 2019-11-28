import EventEmitter from '../services/event-emitter';

test('EventEmitter is an object', () => {
  const ee = new EventEmitter();
  expect(typeof ee).toBe("object");
});
