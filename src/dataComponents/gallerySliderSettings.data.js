const gallerySliderSettings = {
  id: 'gallery',
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrowNextGallery',
    prevEl: '.arrowPrevGallery',
  },
  // pagination: { 
  //   clickable: true,
  //   el: '.dots',
  // },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 2,
    },
    1104 : {
      slidesPerView: 2,
    },
  }
}

export default gallerySliderSettings;