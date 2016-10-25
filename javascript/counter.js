// var wordCounter = {
//   sonnet: document.querySelector('.sonnet').innerText
//
// };


var sonnet = document.querySelector('.sonnet').innerText

function wordCounter(str) {
    return str.split(' ').length;
}
console.log(wordCounter(sonnet));