
export function separateData(data: string[]) {
    const numbers = data.filter(isNumber);
    const alphabets = data.filter(isAlphabet);
    return { numbers, alphabets };
  }
  
  function isNumber(item: string): boolean {
    const num = Number(item);
    return Number.isInteger(num) && !isNaN(num);
  }
  
  function isAlphabet(item: string): boolean {
    return item.length === 1 && isLetter(item);
  }
  
  function isLetter(char: string): boolean {
    const lower = char.toLowerCase();
    const upper = char.toUpperCase();
    return lower !== upper;
  }
  
  export function findHighestLowercaseAlphabet(alphabets: string[]): string[] {

    const lowercaseAlphabets = alphabets.filter(isLowercaseLetter);
  
    if (lowercaseAlphabets.length > 0) {
      lowercaseAlphabets.sort();
      const highestAlphabet = lowercaseAlphabets[lowercaseAlphabets.length - 1];
      return [highestAlphabet];
    }
  
    return [];
  }
  
  function isLowercaseLetter(char: string): boolean {
    return char >= 'a' && char <= 'z';
  }