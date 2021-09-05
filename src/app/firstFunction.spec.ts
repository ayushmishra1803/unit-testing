import { addition } from '../app/firstFunction';
describe('firstFunction', () => {
  it('testing addition function', () => {
    expect(addition(10, 20)).toBe(30);
  });
});
