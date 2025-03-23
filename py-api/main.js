var lang = 1
var method = 1

function Korean() {
  lang = 1
  $('#kor').addClass('bold')
  $('#eng').removeClass('bold')
  
  $('#more').html('')
  $('#go').html('시작')
  $('#xhr').html('XHR(기본)')
  $('#tform').attr('placeholder','API URL을 입력하세요')
  $('#gform').attr('placeholder','API URL을 입력하세요')
  
  
  var txt = ['소개', '사용', '테스트', '주의사항', 'py-api는 API를 불러올 때 CORS에러가 나는 것을 방지해 주는 프록시 서비스 입니다.', `위 [URL] 부분에 API URL을 넣으시면 됩니다. <span id='mde'></span> <br> <p><i class="fa-solid fa-circle-info"></i> <a href="#" onClick='oldURLde()'>구버전 URL</a>도 작동 합니다</p>`, `<li>Get, Post Method만 지원합니다</li>
        <li>파이썬을 사용하여 시간이 조금 소요됩니다</li><li>json 형식의 응답만 지원합니다</li>`, '개발자 도구를 사용해 확인해 보세요', '에러코드', '코드', '내용', 'body의 json이 형식이 올바르지 않음', 'POST 요청시 에러 발생(잘못된 URL 등)', 'GET 요청시 에러 발생(잘못된 URL 등)', '응답이 json이 아니거나 json 형식이 어긋남']
  var ids = ['intro', 'usage', 'test', 'caution', 'intro_de', 'usage_des', 'caution_des', 'test_de', 'ecode', 'col-c', 'col-n', 'c1', 'c2', 'c3', 'c4']
  for (var i = 0; i < txt.length; i++) {
    $(`#${ids[i]}`).html(txt[i])
  }
  
  if (method == 1) { GetMethod() }
  if (method == 2) { PostMethod() }
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
  
  var txt = ['Introduction', 'Usage', 'Test', 'Caution', 'py-api is a proxy service that prevents CORS errors when calling an API.', `Please enter the API URL in the [URL] field above. <span id='mde'></span> <br> <p><i class="fa-solid fa-circle-info"></i> <a href="#" onClick='oldURLde()'>Old URL</a> also works</a>`, `<li>Only Get, Post Method is supported</li>
<li>It takes a little time because it uses Python</li><li>Only JSON format response is supported</li>`, 'Check the result to use developer tools', 'Error Code', 'Code', 'Content', "body's json is not in the correct format", 'An error occurred during a POST request (invalid URL, etc.)', 'An error occurred during a GET request (invalid URL, etc.)', 'The response is not json or is in an invalid json format']
  var ids = ['intro', 'usage', 'test', 'caution', 'intro_de', 'usage_des', 'caution_des', 'test_de', 'ecode', 'col-c', 'col-n', 'c1', 'c2', 'c3', 'c4']
  for (var i = 0; i < txt.length; i++) {
    $(`#${ids[i]}`).html(txt[i])
  }
  
  if (method == 1) { GetMethod() }
  if (method == 2) { PostMethod() }
}

function MakeURL(url) {
  return 'https://api-py.vercel.app/?r=' + url
}

function Copy() {
  var el = document.getElementById("gform")
  var a = el.value
  a = MakeURL(a)
  
  if (method == 2) {
    a += '&body='+document.getElementById('body1').value+'&method=POST'
  }
  
  el.value = a
  el.select();
  
  document.execCommand("copy");
  alert('복사됨 Copied')
}

function GetAPI(m) {
  var url = document.getElementById("tform").value
  const xhr = new XMLHttpRequest();
  
  if (m == 'py-api') {
    url = MakeURL(url)
  }
  
  if (m == 'py-api' && method == 2) {
    url += '&method=POST&body='+document.getElementById('body2').value
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

function GetMethod() {
  var mark = 'https://api-py.vercel.app/?r=[URL]'
  
  method = 1
  $('#mark').html(mark)
  $('#mde').html('')
  $('#msb').html('')
  $('#mtb').html('')
  $('#post').removeClass('bold')
  $('#get').addClass('bold')
}

function PostMethod() {
  var mark = 'https://api-py.vercel.app/?r=[URL]&body=[body]&method=POST'
  var mde = '<br>[body]에 전송할 데이터를 json 형식으로 넣으시면 됩니다.'
  var msb = `<textarea class="form-control nav-bg nav-color" id="body1" style="height: 70px" id='msbody'></textarea>
  <label for="body1">Body</label>`
  var mtb = `<textarea class="form-control nav-bg nav-color" id="body2" style="height: 70px" id='mtbody'></textarea>
  <label for="body1">Body</label>`
  
  if (lang == 0) { mde = '<br>You can enter the data to be transmitted in json format in [body].' }
  
  method = 2
  $('#mark').html(mark)
  $('#mde').html(mde)
  $('#get').removeClass('bold')
  $('#post').addClass('bold')
  $('#msb').html(msb)
  $('#mtb').html(mtb)
}

window.onload = function() {
  main()
};
