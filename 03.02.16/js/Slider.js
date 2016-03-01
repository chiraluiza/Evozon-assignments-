(function () {
  var controlList = document.getElementsByClassName('arrow-btn');
  for (var i = 0; i < controlList.length; i++) {
    controlList[i].addEventListener('click', slider);
  }



function slider(event) {
  //get direction
  console.log('event:', event);
  console.log('event.currentTarget:', event.currentTarget);
  var clsList = event.currentTarget.classList;
  if (strInList('left', clsList)) {
    var direction = 'left';
  }
  else if (strInList('right', clsList)) {
    direction = 'right';
  }
  else {
    console.log('This shouldn\'t happen. Default direction is ON(right).');
    direction = 'right';
  }

  console.log('Direction is:', direction);

  //get cuurent slide and index
  var currentSlide;
  var slideList = document.getElementsByClassName('slide-show');
  for (var i = 0; i < slideList.length; i++) {
    if (strInList('active', slideList[i].classList)) {
      currentSlide = slideList[i];
      currentSlideIndex = i;
    }
  }

  console.log('Current slide is:', currentSlide);
  console.log('Current slideIndex is:', currentSlideIndex);

  //get next slide index
  var nextSlideIndex;
  if (currentSlideIndex === 0 && direction === 'left') {
    nextSlideIndex = slideList.length - 1;
  }
  else if (currentSlideIndex === slideList.length - 1 && direction === 'right') {
    nextSlideIndex = 0;
  }
  else if (direction === 'left') {
    nextSlideIndex = currentSlideIndex - 1;
  }
  else if (direction === 'right') {
    nextSlideIndex = currentSlideIndex + 1;
  }
  else {
    console.log('Something is not ok with this slider');
  }

  console.log('nextSlideIndex = ', nextSlideIndex);

  //remove class 'active' from current slide and add it to the next slide
  slideList[currentSlideIndex].classList.remove('active');
  slideList[nextSlideIndex].classList.add('active');

}

function strInList(str, strList) {
  // look for a string in an array of strings
  var found = false;
  for (var i = 0; i < strList.length; i++) {
    if (strList[i] === str) {
      found = true;
      break;
    }
  }
  return found;
}
}());
