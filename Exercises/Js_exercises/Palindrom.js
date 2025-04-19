
function isPalindrome(s){
    const st1=s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversSt1=st1.split('').reverse().join('');
    return st1===reversSt1;
}
console.log(isPalindrome("123Tt,., tT321./"));
console.log(isPalindrome("asdfghjkl478484v ./v /."));
