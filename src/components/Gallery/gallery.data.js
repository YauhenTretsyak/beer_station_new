import lw_slide_1 from '../../assets/slides/lwowska_1.jpg'
import lw_slide_2 from '../../assets/slides/lwowska_2.jpg'
import lw_slide_3 from '../../assets/slides/lwowska_3.jpg'
// import lw_slide_4 from '../assets/slides/lwowska_4.jpg';
// import lw_slide_5 from '../assets/slides/lwowska_5.jpg';
// import lw_slide_6 from '../assets/slides/lwowska_6.jpg';

import kn_slide_1 from '../../assets/slides/kepna_1.jpg'
import kn_slide_2 from '../../assets/slides/kepna_2.jpg'
import kn_slide_3 from '../../assets/slides/kepna_3.jpg'
import kn_slide_4 from '../../assets/slides/kepna_4.jpg'
import kn_slide_5 from '../../assets/slides/kepna_5.jpg'

import ur_slide_1 from '../../assets/slides/bs_u_1.jpg'
import ur_slide_2 from '../../assets/slides/bs_u_2.jpg'
import ur_slide_3 from '../../assets/slides/bs_u_3.jpg'
import ur_slide_4 from '../../assets/slides/bs_u_4.jpg'
import ur_slide_5 from '../../assets/slides/bs_u_5.jpg'
import ur_slide_6 from '../../assets/slides/bs_u_6.jpg'
import ur_slide_7 from '../../assets/slides/bs_u_7.jpg'

export const galleryData = {
    PL: 'Galeria',
    RU: 'Галерея'
}

export const gallerySliderSettings = {
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

export const gallerySlidesData = {
    kepna: [
        {slide: kn_slide_1},
        {slide: kn_slide_2},
        {slide: kn_slide_3},
        {slide: kn_slide_4},
        {slide: kn_slide_5},
    ],

    lwowska: [
        {slide: lw_slide_1},
        {slide: lw_slide_2},
        {slide: lw_slide_3},
    // { slide: lw_slide_4 },
    // { slide: lw_slide_5 },
    // { slide: lw_slide_6 },
    ],

    ursynow: [
        {slide: ur_slide_1},
        {slide: ur_slide_2},
        {slide: ur_slide_3},
        {slide: ur_slide_4},
        {slide: ur_slide_5},
        {slide: ur_slide_6},
        {slide: ur_slide_7},
    ]
}
