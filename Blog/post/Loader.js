function LoadPost() {
  var x = location.hash.replace('#', '');
  var script = document.createElement('script');
  script.src = `Data/${x}.js`;
  document.body.appendChild(script);
  
  if (x == '') {
    location.href = 'https://dm-09.github.io/Blog/'
  }

  var m_title = document.querySelector("#m-title")
  var m_close = document.querySelector("#m-close")
  m_title.innerHTML = 'No Message 메시지 없음'
  m_close.innerHTML = 'Close 닫기'
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
