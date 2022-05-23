import { cleanText } from './clean-text';

describe('Clean Text', () => {
  it('should delete accents', () => {
    const val = cleanText('Cèsar');
    expect(val).toBe('cesar');
  });
});
