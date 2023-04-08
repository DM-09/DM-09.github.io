var lang = 0
var lang_el;
var c_n;
var c_modal = 0

function Eng() {
  lang = 0
  c_n = ''
  lang_el.innerHTML = 'Language'
  document.querySelector("#sk-de").innerHTML = ' <br> '
  document.querySelector("#m-close").innerHTML = 'Close'
  all_fun()
}
function Kor() {
  lang = 1
  c_n = ''
  lang_el.innerHTML = '언어'
  document.querySelector("#sk-de").innerHTML = ' <br> '
  document.querySelector("#m-close").innerHTML = '닫기'
  all_fun()
}
function Language() {
  var l = navigator.language
  if (l == 'ko-KR') {
    Kor()
  } else {
    Eng()
  }
}

function KorAgeCalc(BY, BM, BD) { 
  var now = new Date();
  var NT = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
  
  var age = Number(NT[0] - BY) + 1
  return  age
};

function AgeCalc(BY, BM, BD) {
  var now = new Date();
  var NT = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
  
  var age = Number(NT[0] - BY)
  
  if (NT[1] >= BM && NT[2] >= BD) {
    return  age
  } else {
    return age - 1
  }
};

function Copy(t) {
  var txt = document.createElement('textarea');
  document.body.appendChild(txt);
  txt.value = t
  txt.select();
  document.execCommand("copy");
  document.body.removeChild(txt);
  alert('복사됨 Copied')
}

function Add_SNS() {
  var txt = `<i class="bi bi-github" onClick='Open(3)'></i> <i class="bi bi-envelope-fill" OnClick='Open(4)'></i> <i class="bi bi-browser-firefox" onClick='Open(5)'></i> <i class="bi bi-discord" onClick='Copy("DM#9596")'></i> <i class="bi bi-plus-circle" data-bs-toggle="modal" data-bs-target="#modal"></i>`
  
  document.querySelector("#SNS").innerHTML = txt
  More_SNS()
}

function More_SNS() {
  var e = ['More Account', `<br><li><a href='https://github.com/happydm09'>2nd Github Account</a></li><li><a href='https://replit.com/@DM-09'>Replit</a></li>`]
  var k = ['기타 계정', `<br><li><a href='https://github.com/happydm09'>깃허브 부계정</a></li><li><a href='https://replit.com/@DM-09'>Replit</a></li>`]
  var el = [document.querySelector("#m-title"), document.querySelector("#m-content")]
  
  if (c_modal == 0) {
    if (lang == 1) {
      el[0].innerHTML = k[0]
      el[1].innerHTML = k[1]
    } else {
      el[0].innerHTML = e[0]
      el[1].innerHTML = e[1]
    }
  }
}

function Open(n) {
  var page = ['https://github.com/DM-09/BeakjoonCode', 'https://github.com/DM-09/Web-Extension', 'https://github.com/DM-09', 'mailto:happydm09@naver.com', 'https://addons.mozilla.org/en-US/firefox/user/17626890/', 'https://github.com/DM-09/PythonCode','https://github.com/DM-09/Bing-AI-for-Any-browser', 'https://github.com/DM-09/tools']
  if (lang == 1) {
    page[4] = 'https://addons.mozilla.org/ko/firefox/user/17626890/'
  } else {
    page[4] = 'https://addons.mozilla.org/en-US/firefox/user/17626890/'
  }
  var url = page[n - 1]
  window.open(url)
}

function all_fun() {
  boj()
  More_SNS()
  de()
}

function boj() {
  var de = document.querySelector("#sol-de")

  if (lang == 1) {
    de.innerHTML = "꾸준히 문제를 풀고 있으며 알고리즘 실력을 키워나가고 있습니다. <br><h8><a href='' class='a' onClick='Open(1)' style='color:gray'>(깃허브 리포지토리)</a></h8>"
  } else {
    de.innerHTML = "I am constantly solving problems and improving my algorithm skills.<br><h8><a onClick='Open(1)' style='color:gray'>(Github Repository)</a></h8>"
  }
}

function de() {
  var el = [document.querySelector("#py-code-de"), document.querySelector("#anywhere-de"), document.querySelector("#tools-de"), document.querySelector("#about-de"), document.querySelector("#age-area")]
  var ko = ['파이썬으로 만든 것들', '모든 브라우저에서 Bing AI를 쓸 수 있는 확장', '유용한 웹 도구 모음', `저는 프로그래머가 꿈인 ${KorAgeCalc(2009, 7, 17)}살 신동민(DM)입니다. <br> 주로 파이썬을 다루고 취미로 웹도 만듭니다.`]
  var en = ['Things made with python', 'A web extension that allows you to use Bing AI in any browser', 'A collection of useful web tools',  `I am ${AgeCalc(2009, 7, 17)}-year-old Shin Dong-min (DM) who dreams of becoming a programmer. <br> I mainly deal with Python and also create web as a hobby.`]
  
  if (lang == 1) {
    el[0].innerHTML = ko[0]
    el[1].innerHTML = ko[1]
    el[2].innerHTML = ko[2]
    el[3].innerHTML = ko[3]
    el[4].innerHTML = KorAgeCalc(2009, 7, 17)
  } else {
    el[0].innerHTML = en[0]
    el[1].innerHTML = en[1]
    el[2].innerHTML = en[2]
    el[3].innerHTML = en[3]
    el[4].innerHTML = AgeCalc(2009, 7, 17)
  }
}

function Skill(name) {
  var de = document.querySelector("#sk-de")
  var sk_ko = {'Python':'가장 주로 쓰는 언어이며 웬만한 것은 구현 가능합니다. <br> ', 'Web':"BootStrap을 사용할 줄 알며 간단한 웹을 만들 수 있습니다. <br> <span>또한 <a href='' onClick='Open(2)' class='a' style='color: gray'>웹 확장</a>까지 만듭니다.</span><br>", 'Lua' : `기본 문법을 알며 한 플랫폼에서 간단한 게임도 만들었습니다. <span style='color: #0d6efd' class='fs-4 my-2'>Java</span> 안드로이드 스튜디오에서 간단한 앱을 만들어 봤으며 기초 문법만 압니다.<br>​`}
  
  var sk_en = {'Python':"It's the most use language and i can almost implement anything. <br> ", "Web" : "I can use Bootstrap and create a simple web. <br> <span> Also I make <a onClick='Open(2)' class='a' href='' style='color: gray'> web extension.</a></span><br>", 'Lua' : `
I know the basic grammar and even made a simple game on one platform. <span style='color: #0d6efd' class='fs-4 my-2'>Java</span> I've made a simple app in Android Studio and I only know basic grammar.<br>​` }
  
  if (lang == 1) {
    de.innerHTML = `<span style='color: #0d6efd' id='sk-n' class='fs-4 my-2'>${name}</span>${sk_ko[name]}`
  } else {
    de.innerHTML = `<span style='color: #0d6efd' id='sk-n' class='fs-4 my-2'>${name}</span>${sk_en[name]}`
  }
  if (c_n == name) {
    de.innerHTML = ' <br> '
    c_n = ''
  } else { c_n = name }
}

window.onload = function() {
  lang_el = document.querySelector("#lang")
  Language()
};
