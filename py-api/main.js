var lang = 1;

function Korean() {
  lang = 1
  $('#kor').addClass('bold')
  $('#eng').removeClass('bold')
  
  $('#more').html('')
  $('#go').html('시작')
  $('#xhr').html('XHR(기본)')
  $('#tform').attr('placeholder','API URL을 입력하세요')
  $('#gform').attr('placeholder','API URL을 입력하세요')
  
  
  var txt = ['소개', '사용', '테스트', '주의사항', 'py-api는 API를 불러올 때 CORS에러가 나는 것을 방지해 주는 프록시 서비스 입니다.', `위 [URL] 부분에 API URL을 넣으시면 됩니다. <br> <p><i class="fa-solid fa-circle-info"></i> <a href="#" onClick='oldURLde()'>구버전 URL</a>도 작동 합니다</p>`, `<li>Get Method만 지원합니다</li>
        <li>파이썬을 사용하여 시간이 조금 소요됩니다</li>
        <li>예러가 나면(잘못된 URL 등) 'Error'를 반환합니다</li>`, '개발자 도구를 사용해 확인해 보세요']
  var ids = ['intro', 'usage', 'test', 'caution', 'intro_de', 'usage_des', 'caution_des', 'test_de']
  for (var i = 0; i < txt.length; i++) {
    $(`#${ids[i]}`).html(txt[i])
  }
}

function English() {
  lang = 0
  $('#kor').removeClass('bold')
  $('#eng').addClass('bold')
  
  $('#more').html('')
  $('#go').html('Start')
  $('#xhr').html('XHR(default)')
  $('#tform').attr('placeholder','Enter the API URL')
  $('#gform').attr('placeholder','Enter the API URL')
  
  var txt = ['Introduction', 'Usage', 'Test', 'Caution', 'py-api is a proxy service that prevents CORS errors when calling an API.', `Please enter the API URL in the [URL] field above. <br> <p><i class="fa-solid fa-circle-info"></i> <a href="#" onClick='oldURLde()'>Old URL</a> also works</a>`, `<li>Only Get Method is supported</li>
        <li>This will take some time because of Python</li>
        <li>If an error occurs (invalid URL, etc.), 'Error' is returned</li>`, 'Check the result to use developer tools']
  var ids = ['intro', 'usage', 'test', 'caution', 'intro_de', 'usage_des', 'caution_des', 'test_de']
  for (var i = 0; i < txt.length; i++) {
    $(`#${ids[i]}`).html(txt[i])
  }
}

function MakeURL(url) {
  return 'https://api-py.vercel.app/?r=' + url
}

function Copy() {
  var el = document.getElementById("gform")
  var a = el.value
  a = MakeURL(a)
  
  el.value = a
  el.select();
  
  document.execCommand("copy");
  alert('복사됨 Copied')
}

function GetAPI(method) {
  var url = document.getElementById("tform").value
  const xhr = new XMLHttpRequest();
  
  if (method == 'py-api') {
    url = MakeURL(url)
  }
  
  xhr.open('GET', url, true);
  xhr.responseType = 'text';
  xhr.send();

  xhr.onload = function() {
    const re = xhr.response;
    alert(re)
    console.log(re)
  }
}

function main() {
  var l = navigator.language
  
  if (l == 'ko-KR') { Korean(); lang = 1 }
  else { English(); lang = 0 }
}

function oldURLde() {
  var a = `Old version URL: URL with / and ? that converted to ~ and $, respectively. <br>
ex: https://api-py.vercel.app/https:~~example.com~api$a=1`
  
  if (lang) { a = '구버전 URL: /, ?가 각각 ~, $로 변환된 URL <br> ex: https://api-py.vercel.app/https:~~example.com~api$a=1' }
  
  $('#more').html(a)
}

window.onload = function() {
  main()
};
