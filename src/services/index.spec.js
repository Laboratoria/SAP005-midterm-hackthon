// importamos la funcion que vamos a testear
import { myFunction } from './index';

describe('myFunction', () => {
  it('should be a function', () => {
    expect(typeof myFunction).toBe('function');
  });
});
