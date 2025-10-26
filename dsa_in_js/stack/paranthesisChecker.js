function isValidParenthesis(str) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of str) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else if ([')', '}', ']'].includes(char)) {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example usage:
console.log(isValidParenthesis("()"));        
console.log(isValidParenthesis("({c+[a+b]})-d"));  
console.log(isValidParenthesis("(]"));     
console.log(isValidParenthesis("((()"));      
console.log(isValidParenthesis("{[()]}")); 
