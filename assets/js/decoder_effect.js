class DecoderEffect {
    constructor(_containerTag, _titles, _deCharacters) {
        this.randomLetter = () => {
            let lettersArray = this.deCharacters.split("");
            let letter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
            return letter;
        };
        this.diffTitles = () => {
            if (this.currentIndex === this.titles.length - 1) {
                this.currentIndex = 0;
            }
            else {
                this.currentIndex++;
            }
            ;
        };
        this.genRandomString = (len) => {
            let randString = "";
            for (let i = 0; i < len; i++) {
                randString += this.randomLetter();
            }
            return randString;
        };
        this.getTitle = (len) => {
            let titleString = "";
            for (let i = 0; i < len; i++) {
                titleString += this.titles[this.currentIndex][i];
            }
            return titleString;
        };
        this.decoderEffect = (Title) => {
            let currentPosition = 0;
            this.diffTitles();
            let title = this.titles[this.currentIndex];
            for (let i = 0, len = title.length; i <= len; i++) {
                this.constructTitle(title, i);
            }
            ;
        };
        this.constructTitle = (title, index) => {
            setTimeout(() => {
                let rand = this.genRandomString(title.length - index);
                let merged = this.getTitle(index) + rand;
                // Changing all the tags in an object 'container' in the html
                for (let i = 0; i < this.container.length; i++) {
                    this.container[i].innerHTML = merged;
                }
            }, index * 60);
        };
        this.adjustLength = () => {
            let title = this.titles[this.currentIndex];
            let prevTitleLength = this.titles[this.currentIndex].length;
            this.diffTitles();
            for (let i = prevTitleLength; i < this.titles[this.currentIndex].length; i++) {
                setTimeout(() => {
                    title += this.randomLetter();
                    let titlePlaceholder = this.genRandomString(title.length);
                    // Changing all the tags in an 'container' object in tht html
                    for (let i = 0; i < this.container.length; i++) {
                        this.container[i].innerHTML = titlePlaceholder;
                    }
                }, (i - prevTitleLength) * 50);
            }
            ;
        };
        this.effectRepeat = (speed) => {
            document.addEventListener('DOMContentLoaded', () => {
                setInterval(() => {
                    this.decoderEffect();
                }, speed);
            }, false);
        };
        this.containerTag = _containerTag;
        this.container = document.querySelectorAll(_containerTag);
        this.titles = _titles;
        this.currentIndex = 0;
        this.deCharacters = _deCharacters || 'アイウエオカキクケコサシスセソタチツテトナニヌネ ナニヌネノハヒフヘホマミムメモヤユヨーラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ';
    }
}
var titles = [
    "Backend Developer",
    "ML Student",
    "Neko",
    "Functional Being",
    "Writer",
    "Re:Automation",
    "Well \(￣w￣ )",
    "I am shy (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)"
];

var deth = 'ऋखकछठडजङढनमफपड़३४ॡएऐईीिदथतख़लळहफ़ढ़ऑ॥ऎाॠऐैेऽ॥ॐढनमफपड़३४ॡएऐईीिदथतख़पड़३४ॡएऐईीिदथतख़लळहफ़ढ़ऑ॥ऎाॠऐैेऽ॥ॐ'
let jap = new DecoderEffect([".navbar-brand", ".intro-text"], titles)
jap.decoderEffect()
jap.effectRepeat(3000)
let hin = new DecoderEffect([".intro-text"], titles, deth)
hin.decoderEffect()
hin.effectRepeat(3000)