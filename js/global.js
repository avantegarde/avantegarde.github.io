// Doctor theme global scripts
function ready(fn) {

  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
    initiatilize();
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'interactive')
      initiatilize();
    });
  }
}
ready();

function initiatilize() {

}