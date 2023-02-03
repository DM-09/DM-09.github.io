//lang
function lang() {
  var la = document.querySelector("#lang")
var lang = la.style.width
const toggle = document.querySelector("#ko");

if (navigator.language == 'ko-KR') {
  lang = '1px'
  toggle.checked = true
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    lang = '1px'
  } else {
    lang = '2px'
  }
  abouts()
  GetSolvedacData();
});
}
	window.onload = function(){
   lang()
  }

// introduce and about code
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
function KorAgeCalc(BY, BM, BD) { 
  var now = new Date();
  var NT = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
  
  var age = Number(NT[0] - BY) + 1
  return  age
};

function abouts() {
  var age = AgeCalc(2009, 7, 17)
var about_el = document.querySelector("#about")

const content = ['def ', ' My_Self', ' ( ): <br>⠀⠀name ', '= ' ,"'DM'", '<br>⠀⠀age ', '= ' ,age, '<br>⠀⠀email ', '= ', "'happydm09@naver.com'"]

var about = [`<br>저는 프로그래머가 꿈인 ${KorAgeCalc(2009,7,17)}살(만${age}살) DM 입니다. 주로 파이썬을 다루며 취미로 웹 페이지도 만듭니다. `, `<br>I'm ${age} years old DM who dream programer. I mainly deal with Python and also create web pages as a hobby.`]

if (lang == '1px') { // 한국어
  about_el.innerHTML = about[0]
} else {
  about_el.innerHTML = about[1]
}

const el = [document.querySelector("#def"),
           document.querySelector("#funn"),
           document.querySelector("#na"),
           document.querySelector("#ne"),
           document.querySelector("#name"),
           document.querySelector("#aa"),
           document.querySelector("#ae"),
           document.querySelector("#age"),
           document.querySelector("#ea"),
           document.querySelector("#en"),
           document.querySelector("#email")]
var i = 0;
setTimeout(function() {
var Typing = setInterval(function() {
          let txt = content[i++];
          el[i - 1].innerHTML = txt;
          if (i == content.length) {
              clearInterval(Typing)
          }
}, 200)
}, 300);
}

//BeakJoon code
let all_tier = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ruby']
let all_subtier = ['V', "IV", 'III', 'II', 'I']

async function SolvedacTier(idx) {
    let tier = 0
    let subtier = 0

    if (Number.isInteger(idx/5)) {
        tier = Math.floor(idx/5)-1
    } else {
        tier = Math.floor(idx/5)
    }

    if (idx%5 == 1) {
        subtier = 0
    }else if (idx%5 == 0) {
        subtier = 4
    } else {
        subtier = (idx%5)-1
    }

    return `${all_tier[tier]} ${all_subtier[subtier]}`
}
async function GetSolvedacData() {
  let Response = await fetch(`https://solved.ac/api/v3/user/show?handle=dongmin`);
  let data = await Response.json();
  let count = document.querySelector('#SolvedCount');
  let tier = document.querySelector('#solvedTier');
  let calculateTier = await SolvedacTier(data.tier);
  
  if (lang == '1px') { // 한국어
    count.innerHTML = `푼 문제 수 <span class='txt-blue'>${data.solvedCount}</span>`;
  tier.innerHTML = `티어 <span class='txt-blue'>${calculateTier}</span>`;
  } else {
    count.innerHTML = `Solved Problem <span class='txt-blue'>${data.solvedCount}</span>`;
  tier.innerHTML = `Tier <span class='txt-blue'>${calculateTier}</span>`;
  }

  return data;
}

GetSolvedacData();
abouts();
