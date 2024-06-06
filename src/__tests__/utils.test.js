// Your tests here
import {isPalindrome} from '../utils';


describe('isPalindrome', () => {
  test('should return true for "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('should return false for "car"', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('should return true for words that are a combination of uppercase and lowercase letters', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
    expect(isPalindrome('Madam')).toBe(true);
  });

  test('should return false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('should throw an error if input has any non-alphabetic characters', () => {
    expect(() => isPalindrome('RaceCar123')).toThrow('Invalid input');
    expect(() => isPalindrome('Hello!')).toThrow('Invalid input');
  });
});
