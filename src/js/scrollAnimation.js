// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
if (ScrollTrigger.isTouch !==1){
  // ---------header---------------------

gsap.fromTo('.header', {opacity: 1}, {
  opacity: 0,
  scrollTrigger: {
    trigger: '.header',
    start: '300',
    end: '1000',
    scrub: true,
  }
})

gsap.to('.layer-1', {
  scrollTrigger:{
    trigger: '.header',
    start: 'top ',
    scrub: true,

  },
  yPercent:30
})


gsap.to('.header__presentation', {
  scrollTrigger:{
    trigger: '.header',
    start: 'top',
    scrub: true,

  },
  yPercent:20
})

// ------------welcome---------------------------
gsap.fromTo('.welcome__orange-planet', {x: 300, y: -150, scale: .1},{
  x: 0, y:0, scale: 1,
  scrollTrigger: {
    trigger: '.header',
    start: 'top top',
    scrub: true,
  }
})


gsap.fromTo('.welcome__blue-planet', {x: -80, y: -15, opacity:0, scale: .1},{
  x: 0, y:0, scale: 1, opacity:1,
  scrollTrigger: {
    trigger: '.header',
    start: 'top top',
    scrub: true,
  }
})

gsap.fromTo('.welcome__block', { opacity:0},{
  opacity:1,
  scrollTrigger: {
    trigger: '.header',
    start: 'center top',
    scrub: true,
  }
})

gsap.fromTo('.welcome__galaxy', { scale:0},{
  scale:1 ,
  scrollTrigger: {
    trigger: '.header',
    start: 'center top',
    scrub: true,
  }
})

gsap.fromTo('.welcome__meteor', { opacity: 1, x: -300, y: -250},{
  opacity: 0, x: 450, y: 250 ,
  scrollTrigger: {
    trigger: '.welcome',
    start: 'top center',
    scrub: true,
  }
})


// Features----------------------------
let svgLeft = gsap.utils.toArray('.game__title-svg-left')
svgLeft.forEach(svgLeft => {
  gsap.fromTo(svgLeft, { x: -1000},{
    x: 0,
    scrollTrigger: {
      trigger: svgLeft,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    }
  })
})

let svgRight = gsap.utils.toArray('.game__title-svg-right')
svgRight.forEach(svgRight => {
  gsap.fromTo(svgRight, { x: 1000},{
    x: 0,
    scrollTrigger: {
      trigger: svgRight,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    }
  })
})



let title = gsap.utils.toArray('.game__title')
title.forEach(title => {
  gsap.fromTo(title, { opacity: 0, scale: .5},{
    opacity: 1, scale:1,
    scrollTrigger: {
      trigger: title,
      start: 'top bottom',
      scrub: true,

    }
  })
})


gsap.fromTo('.game', { opacity: 1, y:0},{
  opacity: 0, y:250,
  scrollTrigger: {
    trigger: '.features__item',
    start: 'top center',
    scrub: true,

  }
})


// ----------------------instruction--------------
gsap.fromTo('.instruction__blue-planet', { opacity: 0, y:-500, x:-1000, rotate: 730},{
  opacity: 1, y:0, x: 0, rotate: 0,
  scrollTrigger: {
    trigger: '.features__item',
    start: 'top center',
    scrub: true,

  }
})

gsap.fromTo('.instruction__horses', { opacity: 0, x:600},{
  opacity: 1, x:0,
  scrollTrigger: {
    trigger: '.features__item',
    start: 'top center',
    scrub: true,

  }
})

// -----------------roadmap---------------



// -------------form ---------------------
gsap.fromTo('.form__blue-planet', { opacity: 0, y:-1500, x:-1000, rotate: -730, scale: .3},{
  opacity: 1, y:0, x: 0, rotate: 0, scale:1,
  scrollTrigger: {
    trigger: '.roadmap__phases',
    start: 'top center',
    scrub: true,


  }
})

gsap.fromTo('.form__meteor', { y:-400, x:400,},{
  y:600, x: -1500, 
  scrollTrigger: {
    trigger: '.form__block',
    start: 'top center',
    scrub: true,
    end: 'bottom top'

  }
})

gsap.fromTo('.form__block', { y:-400, opacity: 0},{
  y:0, opacity:1, 
  scrollTrigger: {
    trigger: '.roadmap__phases',
    start: 'bottom center',
    scrub: true,


  }
})

gsap.fromTo('.form__red-planet', { y:-100, x:-300, scale: .3, opacity: 0},{
  y:0, x: 0, scale: 1, opacity:1,
  scrollTrigger: {
    trigger: '.form__block',
    start: 'top center',
    scrub: true,

  }
})

gsap.fromTo('.form__green-planet', { y:0, x:300, scale: .3, opacity: 0},{
  y:0, x: 0, scale: 1.2, opacity:1,
  scrollTrigger: {
    trigger: '.form__block',
    start: 'center center',
    scrub: true,

  }
})

// --------------partners-------------

gsap.fromTo('.partners__block', {scale: 0, opacity:0},{
  scale: 1, opacity:1,
  scrollTrigger: {
    trigger: '.partners__title',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
    markers: true,
    
  }
})

}


