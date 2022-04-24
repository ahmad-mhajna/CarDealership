/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
  const parenth = s.match(/[()]/g) || [];
  const curly = s.match(/[{}]/g) || [];
  const brackets = s.match(/[[\]]/g) || [];
  if (
    parenth.length % 2 === 0 &&
    curly.length % 2 === 0 &&
    brackets.length % 2 === 0
  )
    return true;
  else return false;
};
isValid("()");
module.exports = isValid;
