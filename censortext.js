/**
 * Created by sunruiguo on 2017/4/17.
 */
var censoreWords = ["sad","bad","bad"];
var customCensoreWords = [];
function censor(inStr){
    for(idx in censoreWords){
        inStr = inStr.replace(censoreWords[idx],"****");
    }
    for(idx in customCensoreWords){
        inStr = inStr.replace(customCensoreWords[idx],"****");
    }
    return inStr;
}
function addCensoredWord(word) {
    customCensoreWords.push(word);
}
function getCensoreWords(){
    return censoreWords.concat(customCensoreWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoreWords = getCensoreWords;

