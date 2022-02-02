function isPalindrome(str) {
    return isPalindrome_helper(str, 0, str.length-1);
}

function isPalindrome_helper(str, start, end) {
    if (start>=end) return true; 
    if (str.charAt(start)!==str.charAt(end)) return false;
    return isPalindrome_helper(str, start+1, end-1);
}
console.log(isPalindrome("racecar"));