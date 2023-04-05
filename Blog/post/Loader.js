function LoadPost() {
  var x = location.hash.replace('#', '');
  var script = document.createElement('script');
  script.src = `Data/${x}.js`;
  document.body.appendChild(script);
  
  if (x == '') {
    location.href = 'https://dm-09.github.io/Blog/'
  }
  
  var page_title = document.querySelector("#page-title")
  var title = document.querySelector("#title")
  var date = document.querySelector("#date")
  var topic = document.querySelector("#topic")
  var content = document.querySelector("#content")
  var m_title = document.querySelector("#m-title")
  var m_close = document.querySelector("#m-close")
  var m_content = document.querySelector("#m-content")
  var content = document.querySelector("#content")
  
  m_content.innerHTML = ''
  m_title.innerHTML = 'No Message 메시지 없음'
  m_close.innerHTML = 'Close 닫기'
  content.innerHTML = '<h3>No Post 글이 존재하지 않습니다.</h3>'
  page_title.innerHTML = 'No post 존재하지 않는 글'
  title.innerHTML = ''
  date.innerHTML = ''
  topic.innerHTML = ''
}

window.onload = LoadPost;

window.onhashchange = LoadPost;

function Copy() {
  var txt = document.createElement('textarea');
  document.body.appendChild(txt);
  txt.value = location.href
  txt.select();
  document.execCommand("copy");
  document.body.removeChild(txt);
  alert('복사됨 Copied')
}
