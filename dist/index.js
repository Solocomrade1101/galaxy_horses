(()=>{var e={705:function(){var e,t;e=this,(t=function(){var e=this;this.defaults={wrapperId:"butter",wrapperDamper:.07,cancelOnTouch:!1},this.validateOptions=function(t){for(var r in t)e.defaults.hasOwnProperty(r)&&Object.defineProperty(e.defaults,r,{value:Object.getOwnPropertyDescriptor(t,r).value})},this.wrapperDamper,this.wrapperId,this.cancelOnTouch,this.wrapper,this.wrapperOffset=0,this.animateId,this.resizing=!1,this.active=!1,this.wrapperHeight,this.bodyHeight}).prototype={init:function(e){e&&this.validateOptions(e),this.active=!0,this.resizing=!1,this.wrapperDamper=this.defaults.wrapperDamper,this.wrapperId=this.defaults.wrapperId,this.cancelOnTouch=this.defaults.cancelOnTouch,this.wrapper=document.getElementById(this.wrapperId),this.wrapper.style.position="fixed",this.wrapper.style.width="100%",this.wrapperHeight=this.wrapper.clientHeight,document.body.style.height=this.wrapperHeight+"px",window.addEventListener("resize",this.resize.bind(this)),this.cancelOnTouch&&window.addEventListener("touchstart",this.cancel.bind(this)),this.wrapperOffset=0,this.animateId=window.requestAnimationFrame(this.animate.bind(this))},wrapperUpdate:function(){var e=null!=document.scrollingElement?document.scrollingElement.scrollTop:document.documentElement.scrollTop||0;this.wrapperOffset+=(e-this.wrapperOffset)*this.wrapperDamper,this.wrapper.style.transform="translate3d(0,"+-this.wrapperOffset.toFixed(2)+"px, 0)"},checkResize:function(){this.wrapperHeight!=this.wrapper.clientHeight&&this.resize()},resize:function(){var e=this;e.resizing||(e.resizing=!0,window.cancelAnimationFrame(e.animateId),window.setTimeout((function(){e.wrapperHeight=e.wrapper.clientHeight,parseInt(document.body.style.height)!=parseInt(e.wrapperHeight)&&(document.body.style.height=e.wrapperHeight+"px"),e.animateId=window.requestAnimationFrame(e.animate.bind(e)),e.resizing=!1}),150))},animate:function(){this.checkResize(),this.wrapperUpdate(),this.animateId=window.requestAnimationFrame(this.animate.bind(this))},cancel:function(){this.active&&(window.cancelAnimationFrame(this.animateId),window.removeEventListener("resize",this.resize),window.removeEventListener("touchstart",this.cancel),this.wrapper.removeAttribute("style"),document.body.removeAttribute("style"),this.active=!1,this.wrapper="",this.wrapperOffset=0,this.resizing=!0,this.animateId="")}},e.butter=new t},563:()=>{document.querySelector(".burger__menu").addEventListener("click",(()=>{document.querySelector(".wrapper").style.display="none",document.querySelector(".adaptive").style.display="block"})),document.querySelector(".adaptive__close").addEventListener("click",(()=>{document.querySelector(".wrapper").style.display="block",document.querySelector(".adaptive").style.display="none"}));document.querySelector(".adaptive__navigation").querySelectorAll("a").forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(".wrapper").style.display="block",document.querySelector(".adaptive").style.display="none"}))}))},44:()=>{document.addEventListener("mousemove",(e=>{Object.assign(document.documentElement,{style:`\n    --move-x: ${-.005*(e.clientX-window.innerWidth/2)}deg;\n    --move-y: ${-.01*(e.clientY-window.innerHeight/2)}deg;\n    `})}))},272:()=>{if(gsap.registerPlugin(ScrollTrigger),1!==ScrollTrigger.isTouch){if(gsap.fromTo(".header",{opacity:1},{opacity:0,scrollTrigger:{trigger:".header",start:"300",end:"1000",scrub:!0}}),gsap.to(".layer-1",{scrollTrigger:{trigger:".header",start:"top ",scrub:!0},y:100}),gsap.to(".header__presentation",{scrollTrigger:{trigger:".header",start:"top",scrub:!0},y:50}),gsap.fromTo(".welcome__orange-planet",{x:300,y:-150,scale:.1},{x:0,y:0,scale:1,scrollTrigger:{trigger:".header",start:"top top",scrub:!0}}),gsap.fromTo(".welcome__blue-planet",{x:-80,y:-15,opacity:0,scale:.1},{x:0,y:0,scale:1,opacity:1,scrollTrigger:{trigger:".header",start:"top top",scrub:!0}}),gsap.fromTo(".welcome__block",{opacity:0},{opacity:1,scrollTrigger:{trigger:".header",start:"center top",scrub:!0}}),gsap.fromTo(".welcome__galaxy",{scale:0},{scale:1,scrollTrigger:{trigger:".header",start:"center top",duration:5,scrub:!0}}),gsap.fromTo(".welcome__meteor",{opacity:1,x:-300,y:-250},{opacity:0,x:450,y:250,scrollTrigger:{trigger:".welcome",start:"top center",scrub:!0}}),gsap.utils.toArray(".game__title-svg-left").forEach((e=>{gsap.fromTo(e,{x:-1e3},{x:0,scrollTrigger:{trigger:e,start:"top center",end:"bottom center",scrub:!0}})})),gsap.utils.toArray(".game__title-svg-right").forEach((e=>{gsap.fromTo(e,{x:1e3},{x:0,scrollTrigger:{trigger:e,start:"top center",end:"bottom center",scrub:!0}})})),gsap.utils.toArray(".game__title").forEach((e=>{gsap.fromTo(e,{opacity:0,scale:.5},{opacity:1,scale:1,scrollTrigger:{trigger:e,start:"top bottom",scrub:!0}})})),window.innerWidth>1460){gsap.utils.toArray(".features__item-left").forEach((e=>{gsap.fromTo(e,{opacity:0,y:-70},{opacity:1,y:0,scrollTrigger:{trigger:".game__title",start:"top center",scrub:!0}})})),gsap.utils.toArray(".features__item-right").forEach((e=>{gsap.fromTo(e,{opacity:0,y:70},{opacity:1,y:0,scrollTrigger:{trigger:".game__title",start:"top center",scrub:!0}})}))}else{gsap.utils.toArray(".features__item-left").forEach((e=>{gsap.fromTo(e,{opacity:0,x:-70},{opacity:1,x:0,scrollTrigger:{trigger:e,start:"top bottom",end:"center center",scrub:!0}})})),gsap.utils.toArray(".features__item-right").forEach((e=>{gsap.fromTo(e,{opacity:0,x:70},{opacity:1,x:0,scrollTrigger:{trigger:e,start:"top bottom",end:"center center",scrub:!0}})}))}gsap.fromTo(".instruction__blue-planet",{opacity:0,y:-500,x:-1e3,rotate:730},{opacity:1,y:0,x:0,rotate:0,scrollTrigger:{trigger:".features__item",start:"top center",scrub:!0}}),gsap.fromTo(".instruction__horses",{opacity:0,x:600},{opacity:1,x:0,scrollTrigger:{trigger:".features__item",start:"top center",scrub:!0}}),gsap.fromTo(".form__blue-planet",{opacity:0,y:-1500,x:-1e3,rotate:-730,scale:.3},{opacity:1,y:0,x:0,rotate:0,scale:1,scrollTrigger:{trigger:".roadmap__phases",start:"top center",scrub:!0}}),gsap.fromTo(".form__meteor",{y:-400,x:400},{y:600,x:-1500,scrollTrigger:{trigger:".form__block",start:"top center",scrub:!0,end:"bottom top"}}),gsap.fromTo(".form__block",{scale:0,opacity:0},{scale:1,opacity:1,scrollTrigger:{trigger:".form__block",start:"top bottom ",end:"center center",scrub:!0}}),gsap.fromTo(".form__red-planet",{y:-100,x:-300,scale:.3,opacity:0},{y:0,x:0,scale:1,opacity:1,scrollTrigger:{trigger:".form__block",start:"top center",scrub:!0}}),gsap.fromTo(".form__green-planet",{y:0,x:300,scale:.3,opacity:0},{y:0,x:0,scale:1.2,opacity:1,scrollTrigger:{trigger:".form__block",start:"center center",scrub:!0}}),gsap.fromTo(".partners__block",{scale:0,opacity:0},{scale:1,opacity:1,scrollTrigger:{trigger:".partners__title",start:"top center",end:"bottom center",scrub:!0}})}},249:()=>{const e=document.querySelectorAll(".main__stars");window.innerWidth<900&&e.forEach((e=>{e.style.display="none"}))}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,r),a.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{"use strict";r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r(44),r(272),r(563),r(249),r(705);if(window.innerWidth<=1e3){const e=document.querySelectorAll("a[href^='#']");for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const r=t.getAttribute("href");document.querySelector(r).scrollIntoView({behavior:"smooth",block:"start"})}))}})()})();