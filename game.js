/* This was my original game.js */


var wordlist = [
    "javascript", "nodejs", "mysql", "mongodb", "webdesign", "coder"
]
var random = Math.floor((Math.random()*(wordlist.length-1)));

var word = wordlist[random];

console.log(word);