/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  for (let i=0 ; i<strs[0].length; i++) {
    for (j=1; j<strs.length; j++){
      if(strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0,i);
      }
    }
  }
  return strs[0];
}




const strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));


module.exports = longestCommonPrefix;
