
//Bruce Laird
//10158951
//SENG 513 Tutorial B04


function getStats(txt) {
    var info = {
        nChars: characterLength(txt),
        nWords: 0,
        nLines: numberOfLines(txt),
        nNonEmptyLines: numberOfNonEmptyLines(txt),
        averageWordLength: averageWLength(txt),
        maxLineLength: maxLineCounter(txt),
        palindromes: findPalindrome(txt),
        longestWords: tenLongest(txt),
        mostFrequentWords: wordFreq(txt)
    };

    //word count
    var regex = /\s+/gi;
    var wordCount = txt.trim().replace(regex, ' ').split(' ').length;
    info.nWords = wordCount;

    //character Length
    function characterLength(txt){
        var charLength = txt.length; 
        return charLength
    }

    //nLines
    function numberOfLines(txt){
        var numLines = txt.split("\n").length;
        return numLines;
    }

    //n-non-empty lines
    //stackoverflow.com/questions/2035910/how-to-get-the-number-of-lines-in-a-textarea 
    function numberOfNonEmptyLines(txt){
        var count = (txt.match(/^\s*\S/gm) || "").length;
        return count;
    }

    function averageWLength(txt){
        var wordCount = txt.trim().replace(regex, ' ').split(' ').length;
        var wordArray = txt.split(" ");
        var wordAvg = 0;
        for (var k = 0; k <wordCount; k++){
            wordAvg += wordArray[k].length;
        }
        var avgLen = wordAvg/wordCount;
        return avgLen; 
    }

    //max line length
    function maxLineCounter(txt){
        var arrayOfLines = txt.split("\n");
        var maxCharCount = 0;
        var temp;
        for (var n = 0; n <arrayOfLines.length; n++){
            if(arrayOfLines[n].length > maxCharCount)
                maxCharCount = arrayOfLines[n].length;
        }
        return maxCharCount;
    }
    
    //Palindromes

    function findPalindrome(txt){
        var palinArray = [];
        var wordArray = txt.trim().replace(/\W+/g, ' ').split(' ');
        var sorted = [];
        for (var i =0; i<wordArray.length; i++){
            sorted.push(wordArray[i].toLowerCase());
        }
        var lowerCaseArray = sorted;

        
        for(var n = 0; n < lowerCaseArray.length; n++) {
        //check if palindrom
        if(lowerCaseArray[n] == lowerCaseArray[n].split("").reverse().join("")&&(lowerCaseArray[n].length>2)){
            palinArray.push(lowerCaseArray[n]);
        }
    }
    return palinArray;
}

    //longest word
    function tenLongest(txt){
        var lowerCase = [];
        var sorted = [];
        var wordArray = txt.trim().replace(/\W+/g, ' ').split(' ');
        for(var t = 0; t< wordArray.length; t++){
            wordArray[t].replace(/[^0-9a-z]/gi, '');
        }

        wordArray.sort(function(a,b){
            return b.length - a.length || a.localeCompare(b);
        });

    //removes duplicates
    var removedDuplicates = wordArray.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
    var reducedArray = removedDuplicates.slice(0,10);

//converts to all lower case
    for (var i =0; i<reducedArray.length; i++){
        sorted.push(reducedArray[i].toLowerCase());
    }
    var lowerCase = sorted;

    return lowerCase;
}

function wordFreq(txt){
        //var temp = txt;
        var freqCount = new Array();
        var wordArray2 = new Array();
        var outputArray = new Array();
        var wordsArray = new Array();

        var wordsOnly = txt.replace(/[^0-9a-zA-Z]/g, ' ');
        var wordsOnly = wordsOnly.replace(/[^\x20-\x7E]+/g, ' ');

        var wordsOnly = wordsOnly.replace(/\s\s+/g, ' ');

        wordsArray= wordsOnly.split(" ");
        var wordsMap = {};

        wordsArray.forEach(function (key) {
            if (wordsMap.hasOwnProperty(key)) {
              wordsMap[key]++;
          } else {
              wordsMap[key] = 1;
          }
      });
        return sortByCount(wordsMap);

        function sortByCount (wordsMap) {

  // sort by count in descending order
  var reducedArray = [];
  var finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function(key) {
    return {
      name: key,
      total: wordsMap[key]
  };
});

  finalWordsArray.sort(function(a, b) {
    return b.total - a.total || a.name.localeCompare(b.names);
});

  var myJSON = [];
  for(var i = 0; i < finalWordsArray.length; i++){
    myJSON[i] = finalWordsArray[i].name + "(" + finalWordsArray[i].total + ")";

}
reducedArray = myJSON.slice(0,10);

return reducedArray;

}

}

return info;
}


