const rewiewsContainer = document.querySelector(".sliders")

const width = rewiewsContainer.scrollWidth;
console.log(width)

const lengthElement = rewiewsContainer.children.length
const widthEl = rewiewsContainer.firstElementChild.offsetWidth

const gap = (width - lengthElement * widthEl)/(lengthElement-1)

console.log(`GAP = ${gap}`)


let counter = 0;
const multiplier = widthEl + gap;

function previousReview(){
    if (counter === 0) return;
    counter = counter + 1;
    rewiewsContainer.style.transform = `translateX(${counter * multiplier}px)`;
}

function nextReview(){
    if (widthEl === 320 && counter === -(lengthElement - 1)) return;
    if (widthEl === 270 && counter === -(lengthElement - 4)) return;
    counter = counter - 1;
    rewiewsContainer.style.transform = `translateX(${counter * multiplier}px)`;
}
