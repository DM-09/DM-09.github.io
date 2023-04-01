var page_title = document.querySelector("#page-title")
var title = document.querySelector("#title")
var date = document.querySelector("#date")
var topic = document.querySelector("#topic")
var content = document.querySelector("#content")
var lang = document.querySelector("#lang")

var la = 0

function Kor() {
  lang.innerHTML = 'To English'
  page_title.innerHTML = '테스트 글'
  title.innerHTML = '테스트 글'
  date.innerHTML = '2023.04.01'
  topic.innerHTML = 'test'
  content.innerHTML = `안녕하세요. <br> 테스트로 쓴 글입니다. 잘 나오네요.`
  la = 1
}

function Eng() {
  lang.innerHTML = '한국어로'
  page_title.innerHTML = 'Test Post'
  title.innerHTML = 'Test Post'
  date.innerHTML = '2023.04.01'
  topic.innerHTML = 'test'
  content.innerHTML = `Hello. I'm DM.<br> Today I write test post. It's works!`
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
