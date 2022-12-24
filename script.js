const countElement = document.querySelector('.count');
const titleElement = document.querySelector('h1');
let count = 0;
let arr = [];
let greeting = 'Good Morning'
let customerName = 'Ma'

countElement.innerHTML = count;

function greet() {
    titleElement.innerText = greeting + " " + customerName
}

function increase() {
    count += 1;
    countElement.innerHTML = count;
}

function decrease() {
    if(count > 0) {
        count -= 1;
        countElement.innerHTML = count;
    }
}

function save() {
    arr = [...arr, count]
    console.log(arr);
}

function reset() {
    count = 0;
    countElement.innerText = count;
}
