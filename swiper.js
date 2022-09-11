
var mainSliderSwiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
})


  var amazingOfferswiper = new Swiper(".amazingOfferSwiper", {
  slidesPerView: 7,
  spaceBetween: 3,
  breakpoints: {
    // when window width is >= 150px
    150: {
      slidesPerView: 2,
      spaceBetween: 3
    },
    395: {
      slidesPerView: 3,
      spaceBetween: 3
    },

    400: {
      slidesPerView: 3,
      spaceBetween: 3
    },

    768: {
      slidesPerView: 5,
      spaceBetween: 3
    }, 
    998: {
      slidesPerView: 6,
      spaceBetween: 3
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 7,
      spaceBetween: 3
    }
  },
  pagination: {
  clickable: false,
  },
  navigation: {
    nextEl: ".amazing-offer-swiper-button-prev",
    prevEl: ".amazing-offer-swiper-button-next",
  },

})



  var multiColSwiper = new Swiper(".multiColumnSwiper", {
  slidesPerView: "6",
  spaceBetween: 0,
  breakpoints: {
    // when window width is >= 150px
    150: {
      slidesPerView: 1,
    
    },
    250: {
      slidesPerView: 2,
    
    },

    400: {
      slidesPerView: 3,
    
    },

    768: {
      slidesPerView: 4,
    
    }, 
    998: {
      slidesPerView: 5,
    
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 6,
    
    }
  },
  pagination: {
  clickable: true,
  },
  navigation: {
    nextEl: ".digi-offer-multicolumn-swiper-button-prev",
    prevEl: ".digi-offer-multicolumn-swiper-button-next",
  }
});


  var popularBrandsSwiper = new Swiper(".popularBrandSwiper", {
  slidesPerView: "6",
  spaceBetween: 0,
  breakpoints: {
    // when window width is >= 150px
    150: {
      slidesPerView: 1,
    
    },
    250: {
      slidesPerView: 2,
    
    },

    400: {
      slidesPerView: 3,
    
    },

    768: {
      slidesPerView: 4,
    
    }, 
    998: {
      slidesPerView: 5,
    
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 8,
    
    }
  },
  pagination: {
  clickable: true,
  },
  navigation: {
    nextEl: ".popular-brands-swiper-button-prev",
    prevEl: ".popular-brands-swiper-button-next",
  },
  
});

var topSaleSwiper = new Swiper(".topSaleSwiper", {
  slidesPerView: "4",
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 150px
    150: {
      slidesPerView: 1,
    
    },
    250: {
      slidesPerView: 1,
    
    },

    400: {
      slidesPerView: 2,
    
    },

    768: {
      slidesPerView: 3,
    
    }, 
    998: {
      slidesPerView: 3,
    
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
    
    }
  },
  pagination: {
  clickable: true,
  },
  navigation: {
    nextEl: ".top-sale-swiper-button-prev",
    prevEl: ".top-sale-swiper-button-next",
  },
  
});
