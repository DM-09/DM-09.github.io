var lang = 0
var lang_el;
var dark = 1

var c_n;
var c_modal = 0
var c_pro = 0
var pro_max = 2

// functions
function Eng() {
  lang = 0
  c_n = ''
  lang_el.innerHTML = 'Language'
  document.querySelector("#sk-de").innerHTML = ' <br> '
  document.querySelector("#m-close").innerHTML = 'Close'
  document.querySelector("#descr").innerHTML = ''
  all_fun()
}
function Kor() {
  lang = 1
  c_n = ''
  lang_el.innerHTML = '언어'
  document.querySelector("#sk-de").innerHTML = ' <br> '
  document.querySelector("#m-close").innerHTML = '닫기'
  document.querySelector("#descr").innerHTML = ''
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
function Myself() {
  var el = ['name', 'intro']
  var ko = ['신동민', `${KorAgeCalc(2009, 7, 17)}살(만 ${AgeCalc(2009, 7, 17)}살)ㆍ웹/백엔드 개발`]
  var en = ['Dongmin Shin', `${AgeCalc(2009, 7, 17)} year-oldㆍWeb/backend`]
  
  for (var i=0; i < el.length; i++) {
    var de = en[i]
    if (lang == 1) {de = ko[i]}
    var n = `#${el[i]}`
    $(n).html(de)
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
function Open(n) {
  var page = ['https://github.com/happydm09/PS', 'https://github.com/DM-09/Web-Extension', 'https://github.com/DM-09', 'mailto:happydm09@naver.com', 'https://addons.mozilla.org/en-US/firefox/user/17626890/', 'https://github.com/DM-09/PythonCode','https://github.com/DM-09/Bing-AI-for-Any-browser', 'https://github.com/DM-09/tools', 'https://codeforces.com/profile/DM-09']
  
  if (lang == 1) {
    page[4] = 'https://addons.mozilla.org/ko/firefox/user/17626890/'
  } else {
    page[4] = 'https://addons.mozilla.org/en-US/firefox/user/17626890/'
  }
  var url = page[n - 1]
  window.open(url)
}

function Add_SNS() {
  var txt = `<i class="bi bi-github" onClick='Open(3)'></i> <i class="bi bi-envelope-fill" OnClick='Open(4)'></i> <i class="bi bi-browser-firefox" onClick='Open(5)'></i> <i class="bi bi-discord" onClick='Copy("DM#9596")'></i> <i class="bi bi-plus-circle" data-bs-toggle="modal" data-bs-target="#modal"></i>`
  
  document.querySelector("#SNS").innerHTML = txt
  More_SNS()
}
function More_SNS() {
  var e = ['More Account', `<br><li><a href='https://github.com/happydm09'>2nd Github Account</a></li><li><a href='https://dm-09.github.io/Blog/'><i class="bi bi-chat-right-text"></i> Blog</a></li><li><a href='https://dm-09.github.io/Docs/'><i class="bi bi-file-earmark-check"></i>Docs</a></li><li><a href='https://replit.com/@DM-09'>Replit</a></li>`]
  
  var k = ['기타 계정', `<br><li><a href='https://github.com/happydm09'>깃허브 부계정</a></li><li><a href='https://dm-09.github.io/Blog/'><i class="bi bi-chat-right-text"></i> 블로그</a></li><li><a href='https://dm-09.github.io/Docs/'><i class="bi bi-file-earmark-check"></i>Docs</a></li><li><a href='https://replit.com/@DM-09'>Replit</a></li>`]
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

function all_fun() {
  boj()
  More_SNS()
  project(c_pro)
  Myself()
}

function boj() {
  var de = document.querySelector("#sol-de")

  if (lang == 1) {
    de.innerHTML = "꾸준히 문제를 풀고 있으며 알고리즘 실력을 키워나가고 있습니다. <br> <a href='' class='a' onClick='Open(9)'>Codeforces</a>등 다양한 곳에서 문제를 풉니다. <br> 100일 연속으로 문제를 해결했었습니다. <br> <h8><a href='' class='a' onClick='Open(1)' style='color:gray'>(깃허브 리포지토리)</a>"
  } else {
    de.innerHTML = "I am constantly solving problems and improving my algorithm skills. <br> <a href='' class='a' onClick='Open(9)'>Codeforces</a>, etc. Solve problems in various places. <br> I have been solved the problem for 100 days in a row. <br> <h8><a onClick='Open(1)' style='color:gray'>(Github Repository)</a></h8>"
  }
}
function Skill(name) {
  var de = document.querySelector("#sk-de")
  var des = document.querySelector("#descr")
  var tab = {'Web': `<br><li class="bi bi-bootstrap mb-1 soso"> - Bootstrap</span></li><li class='soso'><i class="fab fa-js-square mb-1"></i> - Javascript</li><li class='soso'><i class="fa-solid fa-puzzle-piece"></i> - Extension</li><br>`, 'Back' : `<br><li class='good'><i class="fa-brands fa-python mb-1"></i> - Python</li><li class='soso'><span class="fa-light fa-square"></span> - Lua</li><br>`, 'Other': `<br><li class='soso mb-1'><i class="fa-solid fa-pepper-hot"></i> - Flask(python)</li><li class='bad'><i class="fa-brands fa-android"></i> - App(Java)</li><br>`, 'DevOps' : `<br><li class='soso mb-1'><i class="fa-brands fa-github"></i> - Github</li><li class='soso'><i class="bi bi-triangle-fill"></i> - Vercel</li><li class='bad'><i class="fa-brands fa-git-alt"></i> - Git</li><br> `}
  
  var ko = {'Web' : `취미로 웹 제작을 하고 있고 <br> <a href='https://github.com/DM-09/Web-Extension'>브라우저 확장도 만듭니다.</a>`, 'Back' : `파이썬을 가장 잘 다루며 Lua도 할 줄 압니다.`, 'Other' : `주로 API를 만들 때 Flask를 사용합니다. 안드로이드 앱은 만들어본 경험만 있습니다.`, 'DevOps' : `주로 Github(git)로 관리하고 호스팅 할땐 Vercel을 사용합니다.`}
  
  var en = {'Web' : `I do web creation as a hobby, <br> <a href='https://github.com/DM-09/Web-Extension'>I also create browser extensions.</a>`, 'Back' : `I mainly use Python best and knows Lua as well.`, 'Other': `I mainly use Flask to create APIs. I only have experience making Android apps.`, 'DevOps' : `I mainly use Github(git) and Vercel is used for hosting.`}
  var n = en[name]
  
  if (lang == 1) {n = ko[name]}
  
  var names = name
  if (names == 'Back') {names = 'Backend'}
  
  de.innerHTML = tab[name]
  des.innerHTML =  `<h4>${names}</h4><h6>` + n + '</h6><br>'
  if (c_n == name) {
    de.innerHTML = ' <br> '
    des.innerHTML = ''
    c_n = ''
  } else { c_n = name }
}

function project(n) {
  var name = ['<i class="fa-solid fa-puzzle-piece"></i> Anywhere Bing AI', '<i class="fas fa-globe-americas"> </i> Tools', '<i class="fas fa-globe-americas"> </i> CountDown']
  
  var ko_de = [`모든 브라우저에서 Bing AI를 사용할 수 있게 합니다. <br> 또한 여기서만 볼 수 있는 <br> 추가 기능까지 제공합니다.`, `유용한 도구들을 웹에서 쓸 수 있는 사이트 입니다. <br> 다양한 기능들이 많습니다.`, `새해 카운트다운 사이트 입니다. <br> 매년 새로 업데이트 됩니다.`]
  
  var en_de = [`Make Bing AI available in any browser. <br> It also provides <br> function only available here.`, `This is a site where you can use useful tools on the web. <br> There are many different functions.`, `This is a new year countdown site. <br> It is updated every year.`]
  
  var de = en_de[n]
  var a = 'dark'
  if (lang == 1) {de = ko_de[n]}
  if (dark == 0) {a = 'secondary'}
  
  var btns = [`<a id='btn_1' onClick='window.open("https://addons.mozilla.org/en-US/firefox/addon/anywhere-bing-ai/")' class='btn btn-${a} rounded-3 mb-1'><i class="fa-brands fa-firefox-browser"></i> <i class="fa-solid fa-angle-right"></i></a> <a id='btn_2' onClick='window.open("https://github.com/DM-09/Anywhere-Bing-AI")' class='btn btn-${a} rounded-3 mb-1'><i class="fa-brands fa-github"></i> <i class="fa-solid fa-angle-right"></i></a>`, 
              
`<a id='btn_1' onClick='window.open("https://dm-09.github.io/tools/")' class='btn btn-${a} rounded-3 mb-1'><i class="fas fa-globe-americas"></i> <i class="fa-solid fa-angle-right"></i></a> <a id='btn_2'onClick='window.open("https://github.com/DM-09/tools")' class='btn btn-${a} rounded-3 mb-1'><i class="fa-brands fa-github"></i> <i class="fa-solid fa-angle-right"></i></a>`, 
 
`<a id='btn_1' onClick='window.open("https://dm-09.github.io/CountDown/")' class='btn btn-${a} rounded-3 mb-1'><i class="fas fa-globe-americas"></i> <i class="fa-solid fa-angle-right"></i></a> <a id='btn_2'onClick='window.open("https://github.com/DM-09/CountDown")' class='btn btn-${a} rounded-3 mb-1'><i class="fa-brands fa-github"></i> <i class="fa-solid fa-angle-right"></i></a>`]
  
  $('#c_title').html(name[n])
  $('#c_txt').html(de + '<br><br>' + btns[n])
}
function next() {
  if (c_pro != pro_max) {
    var c = $('#b_left').attr('class').replace('disabled', '')
    $('#b_left').attr('class', c)
    c_pro += 1
    project(c_pro)
  }
  
  if (c_pro == pro_max) {
    var c = $('#b_right').attr('class')
    $('#b_right').attr('class', c + ' disabled')
  }
}
function preview() {
   if (c_pro != 0) {
    var c = $('#b_right').attr('class').replace('disabled', '')
    $('#b_right').attr('class', c)
    c_pro -= 1
    project(c_pro)
  }
  
  if (c_pro == 0) {
    var c = $('#b_left').attr('class')
    $('#b_left').attr('class', c + ' disabled')
  }
}

// Start Part
window.onload = function() {
  lang_el = document.querySelector("#lang")
  Language()
  SetMode()
  var c = $('#b_left').attr('class')
  $('#b_left').attr('class', c + ' disabled')
};

// Dark / Light Mode Setting
const is_darkMode = window.matchMedia('(prefers-color-scheme: dark)');

var card = ['pro-card', 'boj-card']
var btn = ['sw', 'sb', 'so', 'beakjoon', 'solved', 'github', 'b_left', 'b_right', 'btn_1', 'btn_2', 'Dev']
var cm = 1

function LightMode() {
    cm = 0
    dark = 0
    // body
  $('#body').css({
    color: '#7286D3',
    backgroundColor: '#EEF1FF'
  })
      // card
    for (var i=0; i < card.length; i++) {
      $(`#${card[i]}`).attr('class', 'card border-primary mb-2 rounded-4 bg-transparent container page')
    }
    
    // btn
    for (var i=0; i < btn.length; i++) {
      var name = `#${btn[i]}`
      var c = $(name).attr('class').replace('dark', 'secondary')
      $(name).attr('class', c)
    }  

  // Footer
  $('#footer').attr('class', '')
  $('#footer').css({backgroundColor: '#ACB1D6'})
  
  // nav
  $('#nav').attr('class', 'navbar navbar-expand-lg sticky-top')
  $('#nav').css({backgroundColor: '#ACB1D6'})
  $('#mod').html('<i class="bi bi-sun"></i>')
  
  // Modal
 $('#mo').attr('class', 'modal-content bg-white text-Black')
  
  // etc
  $('#dropdown').attr('class', 'dropdown-menu dropdown-menu-secondary mx-2')
}
function DarkMode() {
  cm = 1
  dark = 1
  // body
  $('#body').css({
    color: 'white',
    backgroundColor: '#111316'
  })
  // body
  $('#body').attr('class', 'color: white; background-color: #111316')
  // card
    for (var i=0; i < card.length; i++) { $(`#${card[i]}`).attr('class', 'card border-secondary mb-2 rounded-4 bg-transparent container page')}
                                         
    // btn
   for (var i=0; i < btn.length; i++) {
      var name = `#${btn[i]}`
      var c = $(name).attr('class').replace('secondary', 'dark')
      $(name).attr('class', c)
    }
  
  // Footer
  $('#footer').attr('class', 'bg-dark')
  
  // nav
  $('#nav').attr('class', 'navbar navbar-expand-lg bg-dark sticky-top')
  $('#mod').html('<i class="bi bi-moon-stars"></i>')
  
  // Modal
  $('#mo').attr('class', 'modal-content bg-dark text-white')
  
  // etc
  $('#dropdown').attr('class', 'dropdown-menu dropdown-menu-dark mx-2')
}

function SetMode() {
  if (is_darkMode.matches == false) {
    LightMode()
  }
}
function BtnMode() {
  if (cm == 1) { LightMode() } else { DarkMode() }
}

is_darkMode.addEventListener('change', (e) => {
  if (e.matches) { // Dark
    DarkMode()
  } else { // Light
    LightMode()
  }
});
