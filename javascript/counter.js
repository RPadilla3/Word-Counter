(function() {
    'use strict';

    var sonnet = document.querySelector('.sonnet').innerText;

    function wordFrequency(stringOfWords) {
        var frequency = {};
        var splitString = stringOfWords.split(' ');

        splitString.forEach(function count(word) {

            if (word.length > 1) {
                if (frequency[word] === undefined) {
                    frequency[word] = 1;
                } else {
                    frequency[word]++;
                }
            }
        });
        return frequency;
    }
    var result = wordFrequency(sonnet);
    console.log(result);

}());
