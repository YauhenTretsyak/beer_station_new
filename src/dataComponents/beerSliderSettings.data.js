const beerSliderSettings = {
  id: 'main',
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrowNext',
    prevEl: '.arrowPrev',
  },
  pagination: { 
    clickable: true,
    el: '.dots',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1104 : {
      slidesPerView: 3,
    },
  }
}

export default beerSliderSettings;