var namechangeElement = document.querySelector("#namechange1");

function namechange(element) {
    namechangeElement.innerText = "Sarah Smith";
}
function hide(element) {
    element.remove();
}
var count = 2;
var countElement = document.querySelector(".badge");

console.log(countElement);

function subtract() {
    count--;
    countElement.innerText = count;
    console.log(count);
}
