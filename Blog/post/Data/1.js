var page_title = document.querySelector("#page-title")
var title = document.querySelector("#title")
var date = document.querySelector("#date")
var topic = document.querySelector("#topic")
var content = document.querySelector("#content")
var lang = document.querySelector("#lang")

var la = 0

function Kor() {
  lang.innerHTML = 'To English'
  page_title.innerHTML = '2023 만우절'
  title.innerHTML = '2023 만우절'
  date.innerHTML = '2023.04.01'
  topic.innerHTML = 'solved.ac'
  content.innerHTML = `
만우절을 맞아 solved ac에서 41이 들어간 문제를 풀면 배지를 받을 수 있었습니다.<br> 저는 <a onClick='window.open("https://www.acmicpc.net/problem/23841")'>23841번</a>을 풀고 배지를 받았습니다. <br> 그리고 유저 페이지가 code forces처럼 변했더군요. <br><br> 간만에 신선했던 이벤트였던 것 같습니다.<br><br> <img class='img-fluid' alt="" src="https://user-images.githubusercontent.com/112751504/229281107-dd3caee8-ba5c-45d1-9788-cc39992f9da7.png"></img><br>`
  la = 1
}

function Eng() {
  lang.innerHTML = '한국어로'
  page_title.innerHTML = 'April Fool 2023'
  title.innerHTML = 'April Fool 2023'
  date.innerHTML = '2023.04.01'
  topic.innerHTML = 'solved.ac'
  content.innerHTML = `For April Fool's Day, I could get a badge if I solved a problem with problem with problem number contain 41 in solved ac.<br>I solved <aonClick='window.open("https://www.acmicpc.net/problem/23841 ")>23841</a> and received the badge. <br> And the user page has changed like a code force. <br><br> I think it was a fresh event for the first time in a while.<br><br> <img class='img-fluid' alt="" src="https://user-images.githubusercontent.com/112751504/229281107-dd3caee8-ba5c-45d1-9788-cc39992f9da7.png"></img><br>`
  la = 0
}

var l = navigator.language
 if (l == 'ko-KR') {
   Kor()
 } else {
   Eng()
 }

function Click() {
  if (la == 1) {
    Eng()
  } else {
    Kor()
  }
}
