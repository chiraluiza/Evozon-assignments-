(function () {

  var ele = document.getElementsByClassName('button');
  var len = ele.length;

  for (var i=0; i<len; i++) {
    ele[i].addEventListener('click', btn_click);
  }

  function btn_click() {
    var elements = document.getElementsByClassName("button");
    for (var k=0; k<elements.length; k++) {
      if(elements[k].classList.contains('active-btn')) {
        elements[k].classList.remove('active-btn');
      }
    }
    event.currentTarget.classList.add('active-btn');
  }

}());
