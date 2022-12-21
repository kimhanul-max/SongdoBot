const container = document.querySelector(".container").children;
const 이전 = document.querySelector(".이전");
const 다음 = document.querySelector(".다음");
const q5_input = container[4].querySelectorAll("input");
const q9_input = container[8].querySelector("input");
const q12_input = container[11].querySelector("input");
const q15_input = container[14].querySelector("input");
const q17_input = container[16].querySelector("input");
const q19_input = container[18].querySelector("input");
const q22_input = container[21].querySelector("input");
const q25_input = container[24].querySelector("input");
const q26_input = container[25].querySelector("input");
const q27_input = container[26].querySelector("input");
const q28_input = container[27].querySelector("input");
const q29_input = container[28].querySelector("input");
i = 0;
function getindex(params) {
    if (localStorage.getItem("index") > 0) {
        container[i].classList.add("inv");
        i += parseInt(localStorage.getItem("index"));
        container[i].classList.remove("inv");
    }
}
function blockClick() {
    if (i == 4 || i == 8 || i == 11 || i == 14 || i == 16 || i == 18 || i == 21 || i == 24 || i == 25 || i == 26 || i == 27 || i == 28) {
        btnDisabled();
    }else{
        btnActive();
    }
}
function rightBtn() {
    if (i < container.length - 1) {
        container[i].classList.add("inv");
        i += 1;
        localStorage.setItem("index", i);
        container[i].classList.remove("inv");
    }
    blockClick()
}
function leftBtn() {
    if (i > 0) {
        container[i].classList.add("inv");
        i -= 1;
        container[i].classList.remove("inv");
    }
    blockClick()
}
function btnActive()  {
    const target = document.getElementById('target_btn');
    target.disabled = false;
  }
  function btnDisabled()  {
    const target = document.getElementById('target_btn');
    target.disabled = true;
  }
  function checkQ(a, b) {
    if (a.value == b) {
        rightBtn();
        btnActive();
    }else{
        alert("다시 생각해봐!");
    }
  }
  function checkQ5() {
    if (q5_input[0].value == 95 && q5_input[1].value == 12 && q5_input[2].value == 2 && q5_input[3].value == 5) {
        rightBtn();
        btnActive();
    }else{
        alert("다시 생각해봐!");
    }
  }
  getindex();
blockClick();
다음.addEventListener("click", rightBtn);
이전.addEventListener("click", leftBtn)