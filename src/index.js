import './style.css'
import logo from './assets/img/logo.svg'
import frame from './assets/img/frameHeader.png'
import frameButton from './assets/img/frameButtonHeader.svg'
import frameButtonPresentation from './assets/img/frameButtonHeaderPresentation.svg'
import planet1 from './assets/img/welcomePlanetOrange.svg'
import planet2 from './assets/img/welcomePlanetBlue.svg'
import galaxy from './assets/img/welcomeGalaxy.svg'
import meteor from './assets/img/welcomeMeteor.svg'

import flag from './assets/img/flag.svg'
import horse from './assets/img/horse.svg'
import coins from './assets/img/coins.svg'
import dumbbell from './assets/img/dumbbell.svg'
import gameFrame from './assets/img/gameFrame.png'


import instructionHorses from './assets/img/instructionHorses.png'

import roadmapFrame from './assets/img/roadmapFrame.png'
import marker from './assets/img/roadmapListMarker.svg'


import formBluePlanet from './assets/img/formBluePlanet.svg'
import formMeteor from './assets/img/formMeteor.svg'
import formRedPlanet from './assets/img/formRedPlanet.svg'
import formGreenPlanet from './assets/img/formGreenPlanet.svg'
import formFrame from './assets/img/formFrame.png'
import formStar from './assets/img/star.svg'


import partners1 from './assets/img/partners1.png'
import partners2 from './assets/img/partners2.png'
import partnersFrame from './assets/img/partnersFrame.png'

import burgerMenu from './assets/img/burgerMenu.svg'
import burgerClose from './assets/img/closeBurger.svg'



const header = require('./js/header')
const scrollAnimation = require('./js/scrollAnimation')
const adaptive = require('./js/adaptive')
const stars = require('./js/stars')
const butter = require('../dist/butter')

if (window.innerWidth <= 1000){
  const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
};
}
console.log('efdf')
