const container = document.querySelector(".container").children;
const 이전 = document.querySelector(".이전");
const 다음 = document.querySelector(".다음");

i = 0;
function rightBtn() {
    if (i < container.length - 1) {
        container[i].classList.add("inv");
        i += 1;
        container[i].classList.remove("inv");
    }
}
function leftBtn() {
    if (i > 0) {
        container[i].classList.add("inv");
        i -= 1;
        container[i].classList.remove("inv");
    }
}
다음.addEventListener("click", rightBtn);
이전.addEventListener("click", leftBtn)