import example from '../src/example';

describe('test example', (): void => {
  test('test', (): void => {
    const result: string = example('test');
    expect(result).toBe('it work:test');
  });
});
