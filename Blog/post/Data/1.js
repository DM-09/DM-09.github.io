var page_title = document.querySelector("#page-title")
var title = document.querySelector("#title")
var date = document.querySelector("#date")
var topic = document.querySelector("#topic")
var content = document.querySelector("#content")
var lang = document.querySelector("#lang")
var m_content = document.querySelector("#m-content")
var m_title = document.querySelector("#m-title")
var m_close = document.querySelector("#m-close")

var la = 0

function Kor() {
  lang.innerHTML = 'To English'
  page_title.innerHTML = '2023 만우절'
  title.innerHTML = '2023 만우절'
  date.innerHTML = '2023.04.01'
  topic.innerHTML = 'solved.ac'
  content.innerHTML = `만우절을 맞아 solved ac에서 41이 들어간 문제를 풀면 <a href='https://solved.ac/badges/event230401'>배지</a>를 받을 수 있었습니다.<br> 저는 <a href='https://www.acmicpc.net/problem/23841'>23841번</a>을 풀고 배지를 받았습니다. <br> 그리고 유저 페이지가 code forces처럼 변했더군요.<a href='https://solved.ac/profile/dongmin/c'></a> <br><br> 간만에 신선했던 이벤트였던 것 같습니다.<br><br> <img class='img-fluid' alt="" src="https://user-images.githubusercontent.com/112751504/229281107-dd3caee8-ba5c-45d1-9788-cc39992f9da7.png"></img><br>`
  m_title.innerHTML = '여담'
  m_content.innerHTML = `<br><li>필자는 만우절 배지를 111번째로 얻었다.</li><li>CodeForces 버전 페이지는 4/3일 삭제되었다.</li><li>하필 23841번을 고른 이유는 2023년의 23과 41이 들어간 문제 중 가장 만만한 문제였기 때문이다.</li>`
  m_close.innerHTML = '닫기'
  la = 1
}

function Eng() {
  lang.innerHTML = '한국어로'
  page_title.innerHTML = 'April Fool 2023'
  title.innerHTML = 'April Fool 2023'
  date.innerHTML = '2023.04.01'
  topic.innerHTML = 'solved.ac'
  content.innerHTML = `For April Fool's Day, I could get a <a href='https://solved.ac/badges/event230401'>badge</a> if I solved a problem with problem with problem number contain 41 in solved ac.<br>I solved <a href='https://www.acmicpc.net/problem/23841'>23841</a> and received the badge. <br> And the user page has changed like a code forces.<a href='https://solved.ac/profile/dongmin/c'></a> <br><br> I think it was a fresh event for the first time in a while.<br><br> <img class='img-fluid' alt="" src="https://user-images.githubusercontent.com/112751504/229281107-dd3caee8-ba5c-45d1-9788-cc39992f9da7.png"></img><br>`
  m_title.innerHTML = 'Digression'
  m_content.innerHTML = `<br><li>I got the 111th April Fool's Day badge.</li><li>CodeForces version page was deleted on 4/3.</li>`
  m_close.innerHTML = 'Close'
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
