var la = 0

function Kor() {
  var lang = document.querySelector("#lang")
  var ab = document.querySelector("#about")
  var con = document.querySelector("#con")
  lang.innerHTML = 'To English'
  ab.innerHTML = `<i class="bi bi-book"></i> 이것저것 올리는 개인 블로그입니다.`
  con.innerHTML = `<a onClick='window.open("https://dm-09.github.io/Blog/post/#3")'>[ 100 ] - 2023.05.28ㆍsolved.ac</a><br><a onClick='window.open("https://dm-09.github.io/Blog/post/#2")'>[ 도장깨기 ] - 2023.05.10ㆍsolved.ac</a><br><a onClick='window.open("https://dm-09.github.io/Blog/post/#1")'>[ 2023 만우절 ] - 2023.04.01ㆍsolved.ac</a><br>`
  la = 1
}

function Eng() {
  var lang = document.querySelector("#lang")
  var ab = document.querySelector("#about")
  var con = document.querySelector("#con")
  lang.innerHTML = '한국어로'
  ab.innerHTML = `<i class="bi bi-book"></i> This is a personal blog where I post various things.`
  con.innerHTML = `<a onClick='window.open("https://dm-09.github.io/Blog/post/#3")'>[ 100 ] - 2023.05.28ㆍsolved.ac</a><br><a onClick='window.open("https://dm-09.github.io/Blog/post/#2")'>[ The First Solver ] - 2023.05.10ㆍsolved.ac</a><br><a onClick='window.open("https://dm-09.github.io/Blog/post/#1")'>[ April Fool 2023 ] - 2023.04.01ㆍsolved.ac</a><br>`
  la = 0
}

window.onload = Load;

function Load() {
  var l = navigator.language
 if (l == 'ko-KR') {
   Kor()
 } else {
   Eng()
 }
}

function Click() {
  if (la == 1) {
    Eng()
  } else {
    Kor()
  }
}
