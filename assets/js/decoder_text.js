// Elements to target for the decoding text effect
var container = document.querySelector(".navbar-brand");
var singleContainer = document.querySelectorAll('p');
var allParagraphs = document.getElementsByTagName('p');
// Titles to be shown after completition decoding effect
var titles = [
    "Developer",
    "Machine Learning Engineer",
    "Designer",
    "Writer"
];
var currentIndex = 0;
// Texts to be shown during decoding effect
var deCharacters = 'アイウエオカキクケコサシスセソタチツテトナニヌネ ナニヌネノハヒフヘホマミムメモヤユヨーラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ';
// Randomly selecting a letter from the deCharacters string
function randomLetter() {
    var lettersArray = deCharacters.split("");
    var letter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
    return letter;
}
// To show different Titles from the title array
function changeIndex() {
    if (currentIndex === titles.length - 1) {
        currentIndex = 0;
    }
    else {
        currentIndex++;
    }
    ;
}
// Generating a string from the randomLetter function
function randomString(len) {
    var string = "";
    for (var i = 0; i < len; i++) {
        string += randomLetter();
    }
    return string;
}
// Getting the title from the titles array to return a string of a title
function getTitle(len) {
    var string = "";
    for (var i = 0; i < len; i++) {
        string += titles[currentIndex][i];
    }
    return string;
}
// Main Function to do the magic
function decoderEffect(Title) {
    var currentPosition = 0;
    changeIndex();
    var title = titles[currentIndex];
    for (var i = 0, len = title.length; i <= len; i++) {
        constructTitle(title, i);
    }
    ;
}
;
// Constructing the Title and changing the container element
function constructTitle(title, index) {
    setTimeout(function () {
        var rand = randomString(title.length - index);
        var merged = getTitle(index) + rand;
        // Changing all the 'p' tags in the html
        for (var i = 0; i < allParagraphs.length; i++) {
            allParagraphs[i].innerHTML = merged;
        }
    }, index * 60);
}
// Transition from the previous Title to the current title
function adjustLength() {
    var title = titles[currentIndex];
    var prevTitleLength = titles[currentIndex].length;
    changeIndex();
    for (var i = prevTitleLength; i < titles[currentIndex].length; i++) {
        setTimeout(function () {
            title += randomLetter();
            var titlePlaceholder = randomString(title.length);
            // Changing all the 'p' tags in tht html
            for (var i_1 = 0; i_1 < allParagraphs.length; i_1++) {
                allParagraphs[i_1].innerHTML = titlePlaceholder;
            }
        }, (i - prevTitleLength) * 50);
    }
    ;
}
;
// Engine
document.addEventListener('DOMContentLoaded', function () {
    setInterval(function () {
        decoderEffect();
    }, 2000);
}, false);
