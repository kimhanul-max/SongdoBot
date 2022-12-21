const container = document.querySelector(".container").children;
const 이전 = document.querySelector(".이전");
const 다음 = document.querySelector(".다음");
const q5_input = container[4].querySelectorAll("input");
const q9_input = container[8].querySelector("input");
const q12_input = container[11].querySelector("input");
const q15_input = container[14].querySelector("input");
i = 0;
function getindex(params) {
    if (localStorage.getItem("index") > 0) {
        container[i].classList.add("inv");
        i += parseInt(localStorage.getItem("index"));
        container[i].classList.remove("inv");
    }
}
function blockClick() {
    if (i == 4 || i == 8 || i == 11) {
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
        localStorage.setItem("index", i);
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