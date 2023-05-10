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
  m_content.innerHTML = '<br><li>깃허브에 답이 있을지도...</li><li>백준에서 27301번 째로 풀린 문제다.</li>'
  m_title.innerHTML = '여담'
  m_close.innerHTML = '닫기'
  content.innerHTML = `백준에는 아무도 못 푼 문제가 있습니다. <br> 저도 문제를 풀어 첫 정답자가 되고 싶었습니다. 그래서 몇 문제 도전했지만 실패했죠. <br>우연히 쉬운 문제를 찾아서 3번만에 풀었습니다. 그 문제는 <a href='https://www.acmicpc.net/problem/26360'>26360번</a> 입니다.<br><br>아주 뿌듯했고 이제서야 조금 마음이 놓이는 듯 합니다. <br><br><img class='img-fluid' src='https://github.com/DM-09/DM-09.github.io/assets/112751504/61ce701a-1dcf-4af4-9b1c-df1004dfc2de'></img>`
  page_title.innerHTML = '도장깨기'
  title.innerHTML = '도장깨기'
  date.innerHTML = '2023.05.10'
  topic.innerHTML = 'solved.ac'
  la = 1
}

function Eng() {
  lang.innerHTML = '한국어로'
  page_title.innerHTML = 'The First Solver'
  title.innerHTML = 'The First Solver'
  date.innerHTML = '2023.05.10'
  topic.innerHTML = 'solved.ac'
  content.innerHTML = `Baekjoon has a problem that no one has been able to solve. <br> I also wanted to be the first to answer the problem. So I tried a few problems, but failed. <br>I accidentally found an easy problem and solved it in 3 attempts. The problem is <a href='https://www.acmicpc.net/problem/26360'>26360th problem</a>.<br><br>I was very proud and now I feel a little relieved. <br><br><img class='img-fluid' src='https://github.com/DM-09/DM-09.github.io/assets/112751504/61ce701a-1dcf-4af4-9b1c-df1004dfc2de'></img>`
  m_title.innerHTML = 'Digression'
  m_content.innerHTML = `<br><li>There may be an answer on Github...</li><li>This is the 27301st problem solved in Baekjoon.</li>`
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
