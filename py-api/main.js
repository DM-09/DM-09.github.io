function ChangeURL(text) {
  var new_URL = text.replace(/\//g, '~').replace(/\?/g, '$')
  return 'https://api-py.vercel.app/' + new_URL
}

function CopyURL() {
  var el = document.getElementById("url")
  var URL = ChangeURL(el.value)
  
  el.value = URL
  el.select();
  document.execCommand("copy");
  alert('복사됨 Copied')
}

function getAPI(t) {
  var text = document.getElementById("test_u").value
  const xhr = new XMLHttpRequest();
  
  if (t == 'py') { text = ChangeURL(text) }
 
  xhr.open('GET', text, true);
  xhr.responseType = 'text';
  xhr.send();

  xhr.onload = function() {
    const re = xhr.response;
    alert(re)
    console.log(re)
  }
}

function Kor() {
  var names = ['des', 'start', 'sde', 'plz1', 's_btn', 'test', 'ft', 'def', 'caution', 'c_de']
  var ko = ['CORS 에러를 최소화 하는 가장 쉬운 방법',
           '# 빠른 시작',
           'URL 입력 후 복사된 URL을 사용하세요',
           'API URL을 입력하세요. URL에 ~와 $가 없어야 합니다',
           '시작', '# 테스트', `API URL을 입력하세요. URL에 ~와 $가 없어야 합니다<br>버튼 클릭 후 개발자 도구를 확인하세요`,
           '기본', '# 주의', '파이썬에서 받아오고 반환하는 거라 시간이 조금 걸릴 수 있습니다.<br>에러가 나면(예: 올바르지 않은 URL일 때) Error를 반환합니다.<br> Method는 Get만 지원 합니다']
  
  for (var i=0; i < names.length; i++) {
      var de = ko[i]
      var n = `#${names[i]}`
      $(n).html(de)
  }
}

window.onload = function() {
  var l = navigator.language
  if (l == 'ko-KR') {
    Kor()
  }
};
