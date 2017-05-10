function countWords(inputWords) {
    var reducedObject = inputWords.reduce(function (allWords, word) {
        if (word in allWords) {
            allWords[word]++;
        }
        else {
            allWords[word] = 1;
        }
        return allWords;
    }, {});
    return reducedObject;
}

module.exports = countWords