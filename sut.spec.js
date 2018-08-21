import Sut from './sut';

describe('Test something', () => {
  const sut = new Sut();

  test('says hello', () => {
    expect(sut.hello()).toEqual('Hello, World!');
  });
});
