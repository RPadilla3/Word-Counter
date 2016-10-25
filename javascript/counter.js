var wordCounter = {
  sonnet: document.querySelector('.sonnet').innerText

};


var sonnet = document.querySelector('.sonnet').innerText

var string = sonnet;
  function strSplit(stringToSplit) {
    var arrayString = stringToSplit.split(' ');
    console.log(arrayString);
  }

  strSplit(sonnet);



// function epic(str) {
//     return str.replace(/[^qwertyiuopasdfghjklzxcvbnm " "]/gi, ' ');
// }
// console.log(epic(sonnet));
