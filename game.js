var wordlist = [
["J", "A", "V", "A", "S", "C", "R", "I", "P", "T"],
  ["N","O","D","E","J","S"],
  ["M","Y","S","Q", "L"],
  ["M","O","N","G","O","D","B"],
  ["W","E","B","D","E","S","I", "G", "N"],
  ["C","O","D","E","R"]
]
var random = Math.floor((Math.random()*(wordlist.length-1)));

var word = wordlist[random]; 

console.log(word);