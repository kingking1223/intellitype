const paragraphs = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Life is what happens when you're busy making other plans.",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "Always remember that you are absolutely unique. Just like everyone else.",
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    "It is during our darkest moments that we must focus to see the light.",
    "Whoever is happy will make others happy too.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "You will face many defeats in life, but never let yourself be defeated.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Never let the fear of striking out keep you from playing the game.",
    "Life is either a daring adventure or nothing at all.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    "Life is a long lesson in humility.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "Love the life you live. Live the life you love.",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    "Life is made of ever so many partings welded together.",
    "I'm not here to be perfect, I'm here to be real.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only thing we have to fear is fear itself.",
    "A journey of a thousand miles begins with a single step.",
    "If you want to make your dreams come true, the first thing you have to do is wake up.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "I have a dream that one day out in the red hills of Georgia the sons of former slaves and the sons of former slaveowners will be able to sit down together at the table of brotherhood.",
];

const wordList = [
    "the ",
    "be ",
    "of ",
    "and ",
    "a ",
    "to ",
    "in ",
    "he ",
    "have ",
    "it ",
    "that ",
    "for ",
    "they ",
    "i ",
    "with ",
    "as ",
    "not ",
    "on ",
    "she ",
    "at ",
    "by ",
    "this ",
    "we ",
    "you ",
    "do ",
    "but ",
    "from ",
    "or ",
    "which ",
    "one ",
    "would ",
    "all ",
    "will ",
    "there ",
    "say ",
    "who ",
    "make ",
    "when ",
    "can ",
    "more ",
    "if ",
    "no ",
    "man ",
    "out ",
    "other ",
    "so ",
    "what ",
    "time ",
    "up ",
    "go ",
]

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")
const wordsBtn = document.getElementById("words")
const quoteBtn = document.getElementById("quote")
const shortBtn = document.getElementById("short")
const normalBtn = document.getElementById("normal")
const longBtn = document.getElementById("long")
const tenBtn = document.getElementById("ten")
const twentyBtn = document.getElementById("twenty")
const twentyfiveBtn = document.getElementById("twentyfive")
const fiftyBtn = document.getElementById("fifty")
const hunredBtn = document.getElementById("hundreds")
const lengthBar = document.getElementById("length")
const wordcountBar = document.getElementById("wordcount")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;
let mode = "quote";
let wordcount = 10;
let quoteMaxLength = 10;
let quoteMinLength = 0;

function gotoWords() {
    mode = "words";
    lengthBar.style.display = "none";
    wordcountBar.style.display = "flex";
    loadParagraph()
}

function gotoQuote() {
    mode = "quote";
    lengthBar.style.display = "flex";
    wordcountBar.style.display = "none";
    loadParagraph()
}

function gotoShort() {
    quoteMinLength = 0;
    quoteMaxLength = 10;
    loadParagraph()
}

function gotoNormal() {
    quoteMinLength = 10;
    quoteMaxLength = 25;
    loadParagraph()
}

function gotoLong() {
    quoteMinLength = 25;
    quoteMaxLength = 999;
    loadParagraph()
}

function gotoTen() {
    wordcount = 10;
    loadParagraph()
}

function gotoTwenty() {
    wordcount = 20;
    loadParagraph()
}

function gotoTwentyfive() {
    wordcount = 25;
    loadParagraph()
}

function gotoFifty() {
    wordcount = 50;
    loadParagraph()
}

function gotoHundred() {
    wordcount = 100;
    loadParagraph()
}

function countWords(str) {
    const arr = str.split(' ');
    return arr.filter(word => word !== '').length;
}

function loadParagraph() {
    if (mode === "quote") {
        const ranIndex = Math.floor(Math.random() * paragraphs.length);
        if (countWords(paragraphs[ranIndex]) > quoteMaxLength || countWords(paragraphs[ranIndex]) < quoteMinLength) {
            loadParagraph()
        } else {
            typingText.innerHTML = "";
            paragraphs[ranIndex].split("").forEach(char => {
                let span = `<span>${char}</span>`
                typingText.innerHTML += span;
            });
            typingText.querySelectorAll("span")[0].classList.add("active");
            document.addEventListener("keydown", () => inpField.focus());
            typingText.addEventListener("click", () => inpField.focus());
        }
    } else {
        typingText.innerHTML = ""
        for (let i = 0; i < wordcount; i++) {
            const ranIndex = Math.floor(Math.random() * wordList.length);
            wordList[ranIndex].split("").forEach(char => {
                let span = `<span>${char}</span>`
                typingText.innerHTML += span;
            });
            typingText.querySelectorAll("span")[0].classList.add("active");
            document.addEventListener("keydown", () => inpField.focus());
            typingText.addEventListener("click", () => inpField.focus());
        }
    }
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        try {
            characters[charIndex].classList.add("active");
        } catch (error) {
            console.log("test")
            clearInterval(timer);
            inpField.value = "";
        }

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
wordsBtn.addEventListener("click", gotoWords);
quoteBtn.addEventListener("click", gotoQuote);
shortBtn.addEventListener("click", gotoShort);
normalBtn.addEventListener("click", gotoNormal);
longBtn.addEventListener("click", gotoLong);
tenBtn.addEventListener("click", gotoTen);
twentyBtn.addEventListener("click", gotoTwenty);
twentyfiveBtn.addEventListener("click", gotoTwentyfive);
fiftyBtn.addEventListener("click", gotoFifty);
hunredBtn.addEventListener("click", gotoHundred);
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);