var lang = 0
var c = 0

function language() {
 var l = navigator.language
   if (l == 'ko-KR') {
     lang = 1
   } else {
     lang = 0
   }
}

function Main() {
  var e = document.querySelector("#box")
  if (lang == 1) {
  e.innerHTML = `<h3>Main</h3>메인 페이지 입니다. <br><br> <a href='https://dm-09.github.io'>메인</a><br><a href='https://dm-09.github.io/Blog'>블로그</a>`
  } else {
    e.innerHTML = `<h3>Main</h3>This is main page. <br><br> <a href='https://dm-09.github.io'>main</a><br><a href='https://dm-09.github.io/Blog'>blog</a>`
  }
  
  if (c == 1) {
    e.innerHTML = ''
    c = 0
  } else {
    c = 1
  }
}



function Data() {
  var e = document.querySelector("#box")
  if (lang == 1) {
  e.innerHTML = `<h3>Data</h3>그냥 기타 데이터 모아두는 곳 입니다. <br><br> <a href='https://happydm09.github.io/Page/Data/badge.html'>badge - solved.ac</a><br><a href='https://happydm09.github.io/Page/Data/bg.html'>background - solved.ac</a><br><a href='https://happydm09.github.io/Page/solved.ac/dongmin/c'>codeforces ver profile - solved.ac</a>`
  } else {
    e.innerHTML = `<h3>Data</h3>It's just a collection of other data.<br><br> <a href='https://happydm09.github.io/Page/Data/badge.html'>badge - solved.ac</a><br><a href='https://happydm09.github.io/Page/Data/bg.html'>background - solved.ac</a><br><a href='https://happydm09.github.io/Page/solved.ac/dongmin/c'>codeforces ver profile - solved.ac</a>`
  }
  
  if (c == 2) {
    e.innerHTML = ''
    c = 0
  } else {
    c = 2
  }
}

function Page() {
  var e = document.querySelector("#box")
  if (lang == 1) {
  e.innerHTML = `<h3>Page</h3>다른 서비스 페이지 입니다. <br><br> <a href='https://dm-09.github.io/tools'>웹 도구</a><br><a href='https://dm-09.github.io/CountDown'>신년 카운트 다운</a>`
  } else {
    e.innerHTML = `<h3>Page</h3>Other service page <br><br> <a href='https://dm-09.github.io/tools'>Web tools</a><br><a href='https://dm-09.github.io/CountDown'>New year countdown</a>`
  }
  
  if (c == 3) {
    e.innerHTML = ''
    c = 0
  } else {
    c = 3
  }
}

function DL() {
  var e = document.querySelector("#box")
  if (lang == 1) {
  e.innerHTML = `<h3>DownLoad</h3>프로그램 다운로드 모음입니다.<br><br> <a href='https://github.com/DM-09/PythonCode/releases/tag/AutoClicker'>오토 클릭커(exe)</a><br><a href='https://github.com/DM-09/Cam-Plugin/releases/tag/Release'>캠 플러그인(apk)</a><br><a href='https://github.com/DM-09/Web-Extension/releases'>웹 확장</a>`
  } else {
    e.innerHTML = `<h3>DownLoad</h3>A collection of program downloads.<br><br> <a href='https://github.com/DM-09/PythonCode/releases/tag/AutoClicker'>Auto Clicker(exe)</a><br><a href='https://github.com/DM-09/Cam-Plugin/releases/tag/Release'>Cam plugin(apk)</a><br><a href='https://github.com/DM-09/Web-Extension/releases'>Web extension</a>`
  }
  
  if (c == 4) {
    e.innerHTML = ''
    c = 0
  } else {
    c = 4
  }
}


language()
