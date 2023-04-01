function LoadPost() {
  var x = location.hash.replace('#', '');
  var script = document.createElement('script');
  script.src = `Data/${x}.js`;
  document.body.appendChild(script);
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
