(function () {

  var ele = document.getElementsByClassName('button');
  var len = ele.length;

  for (var i=0; i<len; i++) {
    ele[i].addEventListener('click', shoe_click);
  }

  function shoe_click() {
    var elements = document.getElementsByClassName("button");
    for (var k=0; k<elements.length; k++) {
      if(elements[k].classList.contains('active')) {
        elements[k].classList.remove('active');
      }
    }
    event.currentTarget.classList.add('active');
  }

}());


(function () {
  var ele = document.getElementsByClassName('btn');
  var len = ele.length;

  for (var i=0; i<len; i++) {
    ele[i].addEventListener('click', size_click);
  }

  function size_click() {
    var elements = document.getElementsByClassName("btn");
    for (var k=0; k<elements.length; k++) {
      if(elements[k].classList.contains('selected')) {
        elements[k].classList.remove('selected');
      }
    }
    event.currentTarget.classList.add('selected');
  }

}());
