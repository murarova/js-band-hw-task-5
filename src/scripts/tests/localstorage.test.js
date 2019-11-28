import LS from "../services/localstorage"

test('LS is an object', () => {
  expect(typeof LS).toBe("object");
});

test('LS.get without key return undefined', () => {
  const result = LS.get();
  expect(result).toBe(undefined);
});

