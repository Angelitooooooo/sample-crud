

function letterCombinations(digits: string): string[] {
    if (!digits) return [];
    const mappings: { [key: string]: string } = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
    };
    const result: string[] = [];
  
    function backtrack(combination: string, nextDigits: string) {
      if (nextDigits.length === 0) {
        result.push(combination);
      } else {
        const digit = nextDigits[0];
        const letters = mappings[digit];
        for (const letter of letters) {
          backtrack(combination + letter, nextDigits.slice(1));
        }
      }
    }
    
    backtrack('', digits);
    return result;
  }
  
  console.log(letterCombinations('23'));
  console.log(letterCombinations(''));
  console.log(letterCombinations('2')); 