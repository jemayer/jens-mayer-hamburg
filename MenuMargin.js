// Put this function in a footer HTML widget in order to call it on every page.
function adjustHeaderHeight() {
  var secondNav = document.getElementsByClassName("cc-nav-level-1")[0];
  var height = document.getElementsByClassName("tpl-navigation")[0].offsetHeight;
  if(secondNav) {
    document.getElementById('content_area').style.marginTop = height - 50 + 'px';
  } else {
    document.getElementById('content_area').style.marginTop = height - 30 + 'px';
  }
}
