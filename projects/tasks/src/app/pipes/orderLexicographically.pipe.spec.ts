import { OrderLexicographicallyPipe } from './orderLexicographically.pipe';

describe('OrderLexicographicallyPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderLexicographicallyPipe();
    expect(pipe).toBeTruthy();
  });
});
