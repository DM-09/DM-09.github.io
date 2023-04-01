function LoadPost() {
  var x = location.hash.replace('#', '');
  var script = document.createElement('script');
  script.src = `Data/${x}.js`;
  document.body.appendChild(script);
}

window.onload = LoadPost;

window.onhashchange = LoadPost;
