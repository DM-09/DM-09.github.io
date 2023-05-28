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
  m_content.innerHTML = ''
  m_title.innerHTML = '메시지 없음'
  m_close.innerHTML = '닫기'
  content.innerHTML = `매일 연속해서 문제를 풀면 쌓이는 스트릭.<br>오늘부로 스트릭 100일을 달성하였습니다. <br>올해 2/18부터 시작해 개학을 넘어 시험 기간 직전인 오늘 5/28일까지 총 100일간 연속으로 문제를 풀었습니다. <br><br> 100문제들 중 대부분은 B5 문제들이었습니다. <br> 그래서 B5문제들도 모두 다 풀어서 총 배경 두 개까지 얻었네요. <br><br> 뿌듯하긴하나 조금 스트레스였습니다. 한 번쯤 도전한 걸로 만족합니다. 이제 조금 안도할 수 있네요. <br><br><a href='https://solved.ac/profile/dongmin'>제 프로필 가시면 볼 수 있습니다</a><br><br><img class='img-fluid' src='https://github.com/DM-09/DM-09.github.io/assets/112751504/a13e0072-4c9a-46ec-b2b9-c40197b29154'></img>`
  page_title.innerHTML = '100'
  title.innerHTML = '100'
  date.innerHTML = '2023.05.28'
  topic.innerHTML = 'solved.ac'
  la = 1
}

function Eng() {
  lang.innerHTML = '한국어로'
  page_title.innerHTML = '100'
  title.innerHTML = '100'
  date.innerHTML = '2023.05.28'
  topic.innerHTML = 'solved.ac'
  content.innerHTML = `Streaks are accumulated by solving problems every day in succession.<br>As of today, we have reached 100 Streaks. <br>Starting from February 18 this year, we solved the problems for a total of 100 days in a row, beyond the start of school and ending on May 28, right before the exam period. <br><br> Most of the 100 questions were B5 questions. <br> So I solved all the B5 questions and got a total of two backgrounds. <br><br> I was proud, but a little 
